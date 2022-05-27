import { GungnirThemeOptions, i18n } from 'vuepress-theme-gungnir';
import { ImagesUrl, homeHeaderImages } from '../constants/images';
export const themeConfig: Partial<GungnirThemeOptions> = {
  navbarTitle: '⬅️ Home',
  docsDir: 'blog',
  contributors: true,
  hitokoto: 'https://v1.hitokoto.cn?c=d&c=i', // enable hitokoto (一言) or not?
  personalInfo: {
    name: '烂笑',
    avatar: ImagesUrl.avatar,
    description: '热爱摄影 & 热爱工作 & 热爱生活',
    sns: {
      github: 'HiLanXiao',
      email: 'langezhangsz@foxmail.com',
      zhihu: 'pu-tao-21-50',
      bilibili: {
        icon: 'ri-bilibili-line',
        link: 'https://space.bilibili.com/241150548',
      },
    },
  },
  homeHeaderImages: homeHeaderImages.map((image) => ({
    path: image,
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
    search: {
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    },
    giscus: {
      repo: 'HiLanXiao/myBlog', // 必须，string，格式：user_name/repo_name
      repoId: 'MDEwOlJlcG9zaXRvcnkyNDI1MDgzMzk', // 必须，string，在 Giscus 官网上生成
      category: 'Announcements', // 必须，string
      categoryId: 'DIC_kwDODnRiM84CPB2o', // 必须，string，在 Giscus 官网上生成
    },
  },
  footer: `
    Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a> <br/>
    <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2022013778号-1</a>
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
          text: '读书笔记',
          icon: 'ri-book-2-fill',
          children: [
            {
              text: '「国境以南，太阳以西」',
              link: '/readingNotes/「国境以南，太阳以西」.html',
            },
          ],
        },
        {
          text: '摄影日记',
          icon: 'ri-camera-2-fill',
          children: [
            {
              text: '摄影日记_2020_1124',
              link: '/photographicDiary/摄影日记_2020_1124.html',
            },

            {
              text: '摄影日记_2020_1203',
              link: '/photographicDiary/摄影日记_2020_1203.html',
            },
            {
              text: '摄影日记_2021_0323',
              link: '/photographicDiary/摄影日记_2021_0323.html',
            },
            {
              text: '摄影日记_2021_0530',
              link: '/photographicDiary/摄影日记_2021_0530.html',
            },
            {
              text: '摄影日记_2021_杂记',
              link: '/photographicDiary/摄影日记_2021_杂记.html',
            },
            {
              text: '摄影日记_2022_02',
              link: '/photographicDiary/摄影日记_2022_02.html',
            },
            {
              text: '摄影日记_2022_0306',
              link: '/photographicDiary/摄影日记_2022_0306.html',
            },
            {
              text: '摄影日记_2022_04',
              link: '/photographicDiary/摄影日记_2022_04.html',
            },
            {
              text: '摄影日记_2022_摄影群约拍',
              link: '/photographicDiary/摄影日记_2022_摄影群约拍.html',
            },
            {
              text: '摄影日记_2022_0508',
              link: '/photographicDiary/摄影日记_2022_0508.html',
            },
          ],
        },
        {
          text: '技术相关',
          icon: 'ri-macbook-fill',
          children: [
            {
              text: 'vscode  ssh-remote 配置',
              link: '/codingWorld/vscode  ssh-remote 配置.html',
            },
            {
              text: '「持续记录」Rust 学习笔记',
              link: '/codingWorld/「持续记录」Rust 学习笔记.html',
            },
          ],
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
