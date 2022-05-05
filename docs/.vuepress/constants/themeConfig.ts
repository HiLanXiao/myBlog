import { GungnirThemeOptions, i18n } from 'vuepress-theme-gungnir';
import { ImagesUrl } from '../constants/images'
export const themeConfig: Partial<GungnirThemeOptions> = {
  docsDir: 'blog',
  contributors: true,
  hitokoto: 'https://v1.hitokoto.cn?c=d&c=i', // enable hitokoto (一言) or not?
  personalInfo: {
    name: '烂笑',
    avatar: '/images/avatar.jpg',
    description: 'hope & persistence',
    sns: {
      github: 'HiLanXiao',
      email: 'langezhangsz@foxmail.com',
      zhihu: 'pu-tao-21-50',
    },
  },
  homeHeaderImages: Object.keys(ImagesUrl).map(key => ({
    path: ImagesUrl[key]
  })),
  themePlugins: {
    // only enable git plugin in production mode
    git: true,
    katex: true,
    mermaid: true,
    mdPlus: {
      all: true,
    },
    ga: 'G-8R2K3ZRCY6',
    pwa: true,
    search: false,
  },
  footer: `
    Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a> |
  `,
  pages: {
    tags: {
      subtitle: 'Black Sheep Wall',
      bgImage: {
        path: 'https://tva2.sinaimg.cn/large/6ccee0e1gy1gxuz06pfdpj21hc0mv78v.jpg',
        mask: 'rgba(211, 136, 37, .5)',
      },
    },
    links: {
      subtitle:
        'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
      bgImage: {
        path: 'https://tvax3.sinaimg.cn/large/6ccee0e1gy1gxuz0kflemj22an0i3q5s.jpg',
        mask: 'rgba(64, 118, 190, 0.5)',
      },
    },
  },
  locales: {
    '/': {
      navbar: [
        {
          text: '首页',
          icon: 'fa-fort-awesome',
          link: '/',
        },
        {
          text: '标签',
          icon: 'fa-tag',
          link: '/tags/',
        },
        {
          text: '文档',
          icon: 'ri-book-2-fill',
          children: [],
        },
      ],
      sidebar: [
        {
          text: '首页',
          icon: 'fa-fort-awesome',
          link: '/',
        },
        {
          text: '标签',
          icon: 'fa-tag',
          link: '/tags/',
        },
        {
          text: '文档',
          icon: 'ri-book-2-fill',
          children: [],
        },
      ],
    },
  },
  sidebarDepth: 1,
  logo: '/images/avatar.jpg',
};