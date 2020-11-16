module.exports = {
  plugins: ['@vuepress/back-to-top'],
  plugins: ['@vuepress/nprogress'],
  plugins: {
    '@vuepress/active-header-links':{
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }
},
    themeConfig: {
      logo: '/assets/img/dota2.png',
      nav: [
        { text: 'Home', link: '/' },
        {
            text: '前端',
            items: [
              { text: '基础', items: [
             { text: 'html', link: '/html/' },
              { text: 'css', link: '/css/' },
              { text: 'Javascript', link: '/JavaScript/' }
            ] },
            { text: '进阶', items: [
                { text: 'html', items: [/*  */] },
                 { text: 'css', items: [/*  */] },
                 { text: 'Javascript', items: [/*  */] }
               ] },
            ]
        },
          {
            text: '虚幻引擎',
            items: [
              { text: 'html', items: [/*  */] },
              { text: 'css', items: [/*  */] },
              { text: 'Javascript', items: [/*  */] }
            ]
          },
        { text: '关于我', link: '/about' },
        {
            text: '传送门',
            items: [
              { text: '主页', link: '/' },
              { text: '关于我', link: '/about'},
            ]
          },
        { text: 'Google一下', link: 'https://google.com' },
      ],
      sidebar: [
        '',
        'about',
        {
            title: 'html',   // 必要的
            path: '/html/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/'
            ]
          },
          {
            title: 'css',   // 必要的
            path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/'
            ]
          },
          {
            title: 'JavaScript',   // 必要的
            path: '/JavaScript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/'
            ]
          },
      ],
      displayAllHeaders: true // 默认值：false
    }
  }