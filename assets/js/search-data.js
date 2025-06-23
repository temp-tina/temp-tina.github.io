// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-minghao-tang-started-to-create-the-group-homepage",
          title: 'Minghao Tang started to create the group homepage.',
          description: "",
          section: "News",},{id: "news-shiyu-ni-won-the-iclr-2026-best-paper-award-congratulations",
          title: 'Shiyu Ni won the ICLR 2026 best paper award, congratulations!',
          description: "",
          section: "News",},{id: "people-benben",
          title: 'Benben',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/benben.html";
            },},{id: "people-hengran",
          title: 'Hengran',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/hengran.html";
            },},{id: "people-huangwei",
          title: 'Huangwei',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/huangwei.html";
            },},{id: "people-jiahan",
          title: 'Jiahan',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/jiahan.html";
            },},{id: "people-keping",
          title: 'Keping',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/keping.html";
            },},{id: "people-lida",
          title: 'Lida',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/lida.html";
            },},{id: "people-lulu",
          title: 'Lulu',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/lulu.html";
            },},{id: "people-minghao",
          title: 'Minghao',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/minghao.html";
            },},{id: "people-mingkun",
          title: 'Mingkun',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/mingkun.html";
            },},{id: "people-shiyu",
          title: 'Shiyu',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/shiyu.html";
            },},{id: "people-sihui",
          title: 'Sihui',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/sihui.html";
            },},{id: "people-wanqing",
          title: 'Wanqing',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/wanqing.html";
            },},{id: "people-xiaojie",
          title: 'Xiaojie',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/xiaojie.html";
            },},{id: "people-yingqiong",
          title: 'Yingqiong',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yingqiong.html";
            },},{id: "people-yingshuo",
          title: 'Yingshuo',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yingshuo.html";
            },},{id: "people-yuchen",
          title: 'Yuchen',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yuchen.html";
            },},{id: "people-zhikai",
          title: 'Zhikai',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/zhikai.html";
            },},{id: "resources-example",
          title: 'example',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/example/";
            },},{id: "resources-rethinking-self-consistency-for-hallucination-detection-in-llms",
          title: 'Rethinking Self-Consistency for Hallucination Detection in LLMs',
          description: "",
          section: "Resources",handler: () => {
              window.location.href = "/resources/self-consistency_ls/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
