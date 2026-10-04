// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 部署到 GitHub Pages 时由 CI 注入完整域名（环境变量 SITE）
  // 本地开发可留空；仅在 build 时影响绝对 URL / sitemap
  site: process.env.SITE,
  // 仓库名，作为 GitHub Pages 项目站点的子路径
  base: 'tourchina',
});
