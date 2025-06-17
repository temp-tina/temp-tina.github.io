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
        },{id: "nav-seminars",
          title: "seminars",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/seminars/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-join-us",
          title: "join us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join_us/";
          },
        },{id: "news-the-first-time-to-build-the-home-page-template",
          title: 'The first time to build the home page template!',
          description: "",
          section: "News",},{id: "news-shiyu-ni-won-the-iclr-2026-best-paper-award-congratulations",
          title: 'Shiyu Ni won the ICLR 2026 best paper award, congratulations!',
          description: "",
          section: "News",},{id: "people-hengran",
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
            },},{id: "people-yuchen",
          title: 'Yuchen',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yuchen.html";
            },},{id: "seminars-example",
          title: 'example',
          description: "",
          section: "Seminars",handler: () => {
              window.location.href = "/seminars/example/";
            },},{id: "seminars-reasoning-errors-of-llms",
          title: 'Reasoning Errors of LLMs',
          description: "",
          section: "Seminars",handler: () => {
              window.location.href = "/seminars/reasoning_error_of_LLMs_Wanli/";
            },},{id: "seminars-rethinking-llm-unlearning-benchmarks-and-datasets",
          title: 'Rethinking LLM Unlearning: Benchmarks and Datasets',
          description: "",
          section: "Seminars",handler: () => {
              window.location.href = "/seminars/rethinking_LLM_unlearning_qrc/";
            },},{id: "seminars-towards-robust-safety-alignment-of-llms",
          title: 'Towards Robust Safety Alignment of LLMs',
          description: "",
          section: "Seminars",handler: () => {
              window.location.href = "/seminars/robust_alignment_LLMs/";
            },},{id: "seminars-rethinking-self-consistency-for-hallucination-detection-in-llms",
          title: 'Rethinking Self-Consistency for Hallucination Detection in LLMs',
          description: "",
          section: "Seminars",handler: () => {
              window.location.href = "/seminars/self-consistency_ls/";
            },},{id: "seminars-ai-scheming-frontier-models-may-pursue-secret-goals-and-lie-to-you",
          title: 'AI Scheming: Frontier Models may Pursue Secret Goals and Lie to You',
          description: "",
          section: "Seminars",handler: () => {
              window.location.href = "/seminars/ai_scheming_xun/";
            },},{id: "seminars-relearn-unlearning-via-learning-for-large-language-models",
          title: 'ReLearn: Unlearning via Learning for Large Language Models',
          description: "",
          section: "Seminars",handler: () => {
              window.location.href = "/seminars/ReLearn_paperReading_honglin/";
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
