# Social Media Integration Setup

This website now automatically pulls posts from Instagram and Facebook to display in the News section.

## Setup Instructions

### 1. Get API Credentials

#### Facebook
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create an app or use an existing one
3. Get your **Page Access Token** and **Page ID**
4. The token must have `pages_read_engagement` and `pages_read_user_profile` permissions

#### Instagram
1. Link your Instagram Business Account to your Facebook Page
2. In Facebook Developers, add the Instagram Graph API
3. Get your **Instagram Business Account ID** and **Access Token**
4. The token must have `instagram_business_basic` and `instagram_business_content_publishing` permissions

### 2. Configure Environment Variables

Create a `.env` file in the project root with:

```env
FACEBOOK_PAGE_ACCESS_TOKEN=your_facebook_page_token_here
FACEBOOK_PAGE_ID=your_facebook_page_id_here
INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token_here
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_instagram_business_account_id_here
```

Or set them as system environment variables before building.

### 3. Build and Deploy

The social media posts will automatically fetch when you run:

```bash
npm run build
```

Or manually update them:

```bash
node scripts/update-social-media.mjs
```

## How It Works

- The `update-social-media.mjs` script fetches the 6 latest posts from each platform
- Posts are saved to `src/generated/social-media.json`
- Combined with RSS feed data and displayed on the News page
- Run the build/script before deploying to get the latest posts

## Troubleshooting

- **No posts appearing**: Check your `.env` file has correct tokens and IDs
- **API errors**: Ensure your access tokens haven't expired
- **Missing images**: Some platforms may not provide image URLs; fallback images are used

## Testing Locally

1. Set up `.env` with valid credentials
2. Run: `node scripts/update-social-media.mjs`
3. Check `src/generated/social-media.json` to verify posts were fetched
4. Run `npm run dev` to preview locally
