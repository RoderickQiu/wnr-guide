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
            selector: ".content__container img",
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
            description: 'The website and guide of wnr. It\'s a timer app with strong expansibility for computers.',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'wnr',
            text: '简体中文',
            description: '这是wnr的指南与官网。wnr是一款跨平台的轻量计时软件，让你更高效、强力地管理作与息。',
        }
    },
    themeConfig: {
        versionFor: '1.15.2',///version
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
                                title: 'More',
                                to: '/guide/2-more.html',
                            }
                        ],
                    },
                    'settings': {
                        children: [
                            {
                                title: 'Predefined Tasks',
                                to: '/settings/2-predefined-tasks-settings.html',
                            },
                            {
                                title: 'Global Settings',
                                to: '/settings/3-global-settings.html',
                            },
                            {
                                title: 'Lock Mode Settings',
                                to: '/settings/4-lock-mode-settings.html',
                            },
                            {
                                title: 'Other Things',
                                to: '/settings/5-other-things.html',
                            },
                            {
                                title: 'Languages',
                                to: '/settings/6-languages.html',
                            },
                            {
                                title: 'Personalization',
                                to: '/settings/7-personalization.html',
                            },
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
                                title: '为什么你需要wnr',
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
                                title: '更多事项',
                                to: '/zh/guide/2-more.html',
                            }
                        ],
                    },
                    '设置': {
                        children: [
                            {
                                title: '预设设置',
                                to: '/zh/settings/2-predefined-tasks-settings.html',
                            },
                            {
                                title: '全局设置',
                                to: '/zh/settings/3-global-settings.html',
                            },
                            {
                                title: '锁定模式设置',
                                to: '/zh/settings/4-lock-mode-settings.html',
                            },
                            {
                                title: '其它事项',
                                to: '/zh/settings/5-other-things.html',
                            },
                            {
                                title: '语言设置',
                                to: '/zh/settings/6-languages.html',
                            },
                            {
                                title: '个性化设置',
                                to: '/zh/settings/7-personalization.html',
                            },
                        ]
                    }
                },
            },
        },
    },
}