# SEO, GEO and monetization handoff

## Already implemented

- Canonical URL, indexable robots directives and XML sitemap
- Turkish and English language signals
- Open Graph and social preview metadata
- `ProfilePage`, `Person`, `WebSite` and visible-service structured data
- Consistent identity links to GitHub, LinkedIn, Medium and Stack Overflow
- Crawl access for Googlebot, Bingbot and OAI-SearchBot
- Original content surfaces for articles, research, life stories and photo essays
- Privacy-first Analytics, Google Ads and AdSense loaders
- A privacy page and an AdSense `ads.txt` template

## Required after deployment

1. Verify `https://bircany.vercel.app/` in Google Search Console and submit `/sitemap.xml`.
2. Request URL inspection/indexing for the home page after each important content update.
3. Verify the site in Bing Webmaster Tools and submit the same sitemap.
4. Publish original articles, thesis summaries, architecture breakdowns and project case studies regularly. Search and generative search visibility depends far more on useful first-hand material than on hidden markup.
5. Keep the same name, portrait, role, biography and profile links across the website, LinkedIn, GitHub, Medium, university pages, event speaker pages and reputable third-party mentions.
6. Monitor branded searches for `Bircan Yılmaz`, `Bircan Yılmaz backend developer`, and `Bircan Yılmaz software engineer`.

## AdSense activation

1. Apply with the live, finished site and wait for the site status to become **Ready**.
2. Add the real values to the deployment environment using `.env.example`.
3. Rename `public/ads.txt.example` to `public/ads.txt`, replace the placeholder with the publisher ID supplied by AdSense, and redeploy.
4. Keep ads limited and away from primary navigation, contact controls and project buttons.
5. Do not click your own ads or generate incentivized/invalid traffic.

The site deliberately renders no ad code until a real publisher ID, slot ID and visitor consent are present.

## GEO reality check

No implementation can guarantee that an AI assistant will answer with Bircan Yılmaz or rank the site first. The reliable strategy is:

- make the public page crawlable;
- publish unique, attributable, expert-led content;
- keep identity facts consistent across trusted sources;
- earn legitimate mentions and links;
- allow the relevant search crawler;
- measure results in Search Console and Analytics.

Google's current guidance says standard SEO remains foundational for generative search and warns against unsupported "GEO hacks." OpenAI states that public sites can appear in ChatGPT search and recommends allowing OAI-SearchBot.

## Official references

- Google ProfilePage structured data: https://developers.google.com/search/docs/appearance/structured-data/profile-page
- Google generative AI search guidance: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google robots directives: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- OpenAI publisher and search crawler FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Google AdSense site review: https://support.google.com/adsense/answer/7584263
- Google AdSense ads.txt guidance: https://support.google.com/adsense/answer/7679060
- Bing IndexNow: https://www.bing.com/webmasters/help/indexnow-0z209wby
