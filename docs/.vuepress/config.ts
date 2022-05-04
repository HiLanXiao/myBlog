import { defineUserConfig, DefaultThemeOptions } from 'vuepress';
import { themeConfig } from './themeConfig';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  title: 'title',
  description: 'description',
  theme: 'vuepress-theme-gungnir',
  themeConfig,
});
