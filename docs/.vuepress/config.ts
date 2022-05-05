import { defineUserConfig, DefaultThemeOptions } from 'vuepress';
import { themeConfig } from './constants/themeConfig';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  title: 'lanxiao\'s blog',
  description: 'home & persistence',
  theme: 'vuepress-theme-gungnir',
  themeConfig,
});
