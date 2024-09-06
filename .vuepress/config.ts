import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "微鲤前端团队",
  description: "Just playing around",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({  
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "wekoi",
    authorAvatar: "/head.png",
    base:'/wekoi-front-blog/',
    docsRepo: "https://gitlab.wekoi.cc/weli-fed-project/wekoi-front-blog",
    docsBranch: "master",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/blogs/JavaScript/": [
        {
          text: "Object",
          children: [
            {
              text:"Object.assign",link: "/blogs/JavaScript/Object/Object.assign"
            }, 
            {
              text:"Object.freeze", link: "/blogs/JavaScript/Object/Object.freeze"
            }]
        },
        {
          text: "Array",
          children: [
            {
              text:"Array.from",link: "/blogs/JavaScript/Array/Array.from"
            }
          ]
        },
      ],
      "/blogs/tools/": [
        {
          text: "说明",
          link: "/blogs/tools/desc",
          children: []
        }
      ],
      "/docs": [
        {
          text: "风控平台",
          children: [
            {
              text:"说明",link: "/docs/aegis/desc"
            }]
        },
        {
          text: "中华万年历H5",
          children: [
            {
              text:"说明",link: "/docs/zhwnl_H5/desc"
            }]
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      { text: "分类", link: "/categories/CSS/1.html" },
      { text: "工具", link: "/blogs/tools/desc" },
      {
        text: "项目",
        children: [
          { text: "风控平台", link: "/docs/aegis/desc" },
          { text: "中华万年历H5", link: "/docs/zhwnl_H5/desc" },
        ],
      },
    ],
    
  }),
});
