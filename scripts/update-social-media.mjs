import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || '';
const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID || '';
const FACEBOOK_PAGE_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN || '';
const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID || '';

const outputPath = fileURLToPath(new URL('../src/generated/social-media.json', import.meta.url));
const fallbackImage =
  'https://www.bloubergranthigh.co.za/wp-content/uploads/2019/02/grade8-orientation-1080x608.jpg';

const formatDate = (value) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return 'Social media';
  }

  return new Intl.DateTimeFormat('en-ZA', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

const truncate = (value, length) => {
  if (!value) {
    return '';
  }

  return value.length > length ? `${value.slice(0, length).trim()}...` : value;
};

const fetchInstagramPosts = async () => {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
    console.warn('Instagram credentials not set. Skipping Instagram posts.');
    return [];
  }

  try {
    const url = new URL(`https://graph.instagram.com/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`);
    url.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,timestamp,permalink');
    url.searchParams.set('access_token', INSTAGRAM_ACCESS_TOKEN);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return (data.data || []).slice(0, 6).map((post) => {
      const caption = post.caption || 'Check out this post from Bloubergrant High School!';

      return {
        title: truncate(caption.split('\n')[0], 80),
        meta: formatDate(post.timestamp),
        image: post.media_type === 'VIDEO' ? post.thumbnail_url || fallbackImage : post.media_url || fallbackImage,
        text: truncate(caption, 190),
        link: post.permalink,
        source: 'instagram',
      };
    });
  } catch (error) {
    console.error('Error fetching Instagram posts:', error.message);
    return [];
  }
};

const fetchFacebookPosts = async () => {
  if (!FACEBOOK_PAGE_ACCESS_TOKEN || !FACEBOOK_PAGE_ID) {
    console.warn('Facebook credentials not set. Skipping Facebook posts.');
    return [];
  }

  try {
    const url = new URL(`https://graph.facebook.com/${FACEBOOK_PAGE_ID}/feed`);
    url.searchParams.set('fields', 'id,message,story,picture,link,permalink_url,created_time,full_picture');
    url.searchParams.set('access_token', FACEBOOK_PAGE_ACCESS_TOKEN);
    url.searchParams.set('limit', '6');

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return (data.data || []).slice(0, 6).map((post) => {
      const text = post.message || post.story || 'Check out this post from Bloubergrant High School!';

      return {
        title: truncate(text.split('\n')[0], 80),
        meta: formatDate(post.created_time),
        image: post.full_picture || post.picture || fallbackImage,
        text: truncate(text, 190),
        link: post.permalink_url || post.link || '#',
        source: 'facebook',
      };
    });
  } catch (error) {
    console.error('Error fetching Facebook posts:', error.message);
    return [];
  }
};

const main = async () => {
  console.log('Fetching social media posts...');

  const [instagramPosts, facebookPosts] = await Promise.all([fetchInstagramPosts(), fetchFacebookPosts()]);
  const allPosts = [...instagramPosts, ...facebookPosts];

  if (allPosts.length === 0) {
    console.warn('No social media posts fetched. Check your API credentials.');
  } else {
    console.log(`Fetched ${instagramPosts.length} Instagram posts and ${facebookPosts.length} Facebook posts.`);
  }

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(allPosts, null, 2)}\n`);
  console.log('Social media data saved to', outputPath);
};

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
