module.exports = {
    theme: 'api',
    head: [
        ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
        ['script', { src: '/patcher.js' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/appleTouchIcon.png' }]
    ],
    evergreen: true,
    shouldPrefetch: () => false,
    plugins: {
        'sitemap': {
            hostname: 'https://getwnr.com'
        },
        'smooth-scroll': {},
        "pangu": {},
        'zooming': {
            selector: ".content__container img:not(.with-link)",
            options: {
                bgColor: '#ffffff',
                zIndex: 10000,
            },
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        },
        'canonical': {
            baseURL: 'https://getwnr.com'
        },
        'img-lazy': {}
    },
    port: 9311,
    editLinks: true,
    locales: {
        '/': {
            lang: 'en-US',
            title: 'wnr',
            text: 'English',
            description: 'The website and guide of wnr. It\'s a time- management tool for computers. ',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'wnr',
            text: '简体中文',
            description: '这是wnr的指南与官网。wnr是一款跨平台的轻量计时软件，让你更高效、强力地管理作与息。',
        }
    },
    themeConfig: {
        versionFor: '1.20.0',///version
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                sidebar: {
                    'home': {
                        children: [
                            {
                                title: 'Homepage',
                                to: '/',
                            },
                            {
                                title: 'Why [wnr]',
                                to: '/why-wnr/yes-wnr.html',
                            },
                            {
                                title: 'Download Links',
                                to: '/download/links.html'
                            }
                        ],
                    },
                    'guide': {
                        children: [
                            {
                                title: 'Basic Usage',
                                to: '/guide/1-basic-usage.html',
                            },
                            {
                                title: 'Statistics',
                                to: '/guide/3-statistics.html',
                            },
                            {
                                title: 'More',
                                to: '/guide/2-more.html',
                            },
                            {
                                title: 'Settings',
                                to: '/settings/settings.html',
                            }
                        ]
                    }
                },
            },
            '/zh/': {
                selectText: '语言',
                label: '简体中文',
                sidebar: {
                    '基本': {
                        children: [
                            {
                                title: '首页',
                                to: '/zh/',
                            },
                            {
                                title: '你需要wnr',
                                to: '/zh/why-wnr/yes-wnr.html',
                            },
                            {
                                title: '下载链接',
                                to: '/zh/download/links.html'
                            }
                        ],
                    },
                    '导引': {
                        children: [
                            {
                                title: '基本使用要领',
                                to: '/zh/guide/1-basic-usage.html',
                            },
                            {
                                title: '时间统计',
                                to: '/zh/guide/3-statistics.html',
                            },
                            {
                                title: '更多事项',
                                to: '/zh/guide/2-more.html',
                            },
                            {
                                title: '设置',
                                to: '/zh/settings/settings.html',
                            }
                        ]
                    }
                },
            },
        },
    },
}