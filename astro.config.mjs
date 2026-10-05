// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // 自定义域名：构建时由 CI 注入，本地开发可留空
  site: process.env.SITE || 'https://chinanomadguide.com',
  integrations: [sitemap(), mdx()],
});
