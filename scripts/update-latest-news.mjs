import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const feedUrl = 'https://www.bloubergranthigh.co.za/category/latest-news/feed/';
const awsumUrl = 'https://www.awsumnews.co.za/category/regions/western-cape/table-bay-melkbos/bloubergrant-high/';
const outputUrl = new URL('../src/generated/latest-news.json', import.meta.url);
const fallbackImage = 'https://www.bloubergranthigh.co.za/wp-content/uploads/2019/02/grade8-orientation-1080x608.jpg';

const decodeEntities = (value) =>
  value
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/&#038;/g, '&')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/&#8230;/g, '...')
    .replace(/\u00e2\u20ac[\u2122\u2019]/g, "'")
    .replace(/\u00e2\u20ac[\u201c\u009d]/g, '"')
    .replace(/\u00e2\u20ac\u201c/g, '-')
    .replace(/Â /g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .trim();

const stripHtml = (value) =>
  decodeEntities(value)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const getTag = (item, tag) => {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match ? decodeEntities(match[1]) : '';
};

const getImage = (item) => {
  const encoded = getTag(item, 'content:encoded');
  const imageMatch = encoded.match(/https:\/\/www\.bloubergranthigh\.co\.za\/wp-content\/uploads\/[^"'\s>]+\.(?:jpg|jpeg|png)/i);
  return imageMatch ? imageMatch[0] : '';
};

const getPostImage = async (link) => {
  try {
    const response = await fetch(link);
    if (!response.ok) return '';
    const html = await response.text();
    const ogImage = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
    const uploadImage = html.match(/https:\/\/www\.bloubergranthigh\.co\.za\/wp-content\/uploads\/[^"'\s>]+\.(?:jpg|jpeg|png)/i);
    return ogImage?.[1] || uploadImage?.[0] || '';
  } catch {
    return '';
  }
};

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Latest News';
  return new Intl.DateTimeFormat('en-ZA', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
};

const parseFeed = async (xml) => {
  const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
  const items = await Promise.all(itemMatches.slice(0, 6).map(async ([, item]) => {
    const title = getTag(item, 'title');
    const link = getTag(item, 'link');
    const pubDate = getTag(item, 'pubDate');
    const content = getTag(item, 'content:encoded') || getTag(item, 'description');
    const cleaned = stripHtml(content)
      .replace(/The post .* appeared first on High School Bloubergrant\s*\.?$/i, '')
      .trim();
    const text = cleaned || `Latest news from Bloubergrant High School: ${title}.`;
    const rssImage = getImage(item);
    const postImage = rssImage ? '' : await getPostImage(link);

    return {
      title,
      meta: formatDate(pubDate),
      image: rssImage || postImage || fallbackImage,
      text: `${text.slice(0, 190)}${text.length > 190 ? '...' : ''}`,
      link
    };
  }));
  return items;
};

const cleanOptimoleImage = (value) => {
  const decoded = decodeEntities(value);
  const sourceMatch = decoded.match(/https:\/\/www\.awsumnews\.co\.za\/wp-content\/uploads\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/i);
  return sourceMatch?.[0] || decoded;
};

const parseAwsumArchive = (html) => {
  const titleLinks = [...html.matchAll(/<h4[^>]*class="title"[^>]*>\s*<a[^>]*href="([^"]*bloubergrant-high[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
  const seen = new Set();

  return titleLinks
    .map((match) => {
      const [fullMatch, href, rawTitle] = match;
      if (seen.has(href)) return null;
      seen.add(href);

      const matchIndex = match.index || 0;
      const blockStart = html.lastIndexOf('<li ', matchIndex);
      const blockEnd = html.indexOf('</li>', matchIndex);
      const block = html.slice(
        blockStart === -1 ? Math.max(0, matchIndex - 2400) : blockStart,
        blockEnd === -1 ? matchIndex + fullMatch.length + 1600 : blockEnd + 5
      );
      const image =
        block.match(/data-opt-src="([^"]+)"/i) ||
        block.match(/<img[^>]+src="([^"]+)"/i) ||
        block.match(/<meta itemprop="url" content="([^"]+)"/i);
      const date = block.match(/<div class="post-date">[\s\S]*?<\/i>([\s\S]*?)<\/div>/i);
      const excerpt = block.match(/<div class="excerpt">([\s\S]*?)<\/div>/i);

      if (!image) return null;

      return {
        title: stripHtml(rawTitle),
        meta: stripHtml(date?.[1] || 'AWSUM School News'),
        image: cleanOptimoleImage(image[1]),
        text: stripHtml(excerpt?.[1] || `Recent Bloubergrant High School update: ${stripHtml(rawTitle)}.`),
        link: decodeEntities(href)
      };
    })
    .filter(Boolean)
    .slice(0, 6);
};

const readExisting = async () => {
  try {
    return JSON.parse(await readFile(outputUrl, 'utf8'));
  } catch {
    return [];
  }
};

try {
  const awsumResponse = await fetch(awsumUrl);
  if (!awsumResponse.ok) throw new Error(`AWSUM archive returned ${awsumResponse.status}`);
  let latestNews = parseAwsumArchive(await awsumResponse.text());

  if (!latestNews.length) {
    const response = await fetch(feedUrl);
    if (!response.ok) throw new Error(`Feed returned ${response.status}`);
    latestNews = await parseFeed(await response.text());
  }

  if (!latestNews.length) throw new Error('No feed items found');

  await mkdir(dirname(fileURLToPath(outputUrl)), { recursive: true });
  await writeFile(outputUrl, `${JSON.stringify(latestNews, null, 2)}\n`);
  console.log(`Updated ${latestNews.length} latest-news items.`);
} catch (error) {
  const existing = await readExisting();
  console.warn(`Could not update latest news: ${error.message}`);
  console.warn(`Keeping ${existing.length} existing fallback items.`);
}
