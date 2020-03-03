module.exports = {
    theme: 'api',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }],
        ['script', { src: '/patcher.js' }]
    ],
    plugins: {
        'sitemap': {
            hostname: 'https://wnr.scris.top'
        },
        'smooth-scroll': {},
        "pangu": {},
        'zooming': {
            selector: ".content__container img",
            options: {
                bgColor: '#fefefe',
                zIndex: 10000,
            },
        },
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
        versionFor: '1.12.2',///version
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
                            }
                        ],
                    },
                    'guide': {
                        children: [
                            {
                                title: '1. Basic Usage',
                                to: '/guide/1-basic-usage.html',
                            },
                            {
                                title: '2. More',
                                to: '/guide/2-more.html',
                            },
                            {
                                title: '3. Download Links',
                                to: '/download/links.html'
                            }
                        ],
                    },
                    'settings': {
                        children: [
                            {
                                title: '1. Time Settings',
                                to: '/settings/1-time-settings.html',
                            },
                            {
                                title: '2. Predefined Tasks',
                                to: '/settings/2-predefined-tasks-settings.html',
                            },
                            {
                                title: '3. Global Settings',
                                to: '/settings/3-global-settings.html',
                            },
                            {
                                title: '4. Lock Mode Settings',
                                to: '/settings/4-lock-mode-settings.html',
                            },
                            {
                                title: '5. Other Things',
                                to: '/settings/5-other-things.html',
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
                            }
                        ],
                    },
                    '导引': {
                        children: [
                            {
                                title: '1. 基本使用要领',
                                to: '/zh/guide/1-basic-usage.html',
                            },
                            {
                                title: '2. 更多事项',
                                to: '/zh/guide/2-more.html',
                            },
                            {
                                title: '3. 下载链接',
                                to: '/zh/download/links.html'
                            }
                        ],
                    },
                    '设置': {
                        children: [
                            {
                                title: '1. 时间设置',
                                to: '/zh/settings/1-time-settings.html',
                            },
                            {
                                title: '2. 预设设置',
                                to: '/zh/settings/2-predefined-tasks-settings.html',
                            },
                            {
                                title: '3. 全局设置',
                                to: '/zh/settings/3-global-settings.html',
                            },
                            {
                                title: '4. 锁定模式设置',
                                to: '/zh/settings/4-lock-mode-settings.html',
                            },
                            {
                                title: '5. 其它事项',
                                to: '/zh/settings/5-other-things.html',
                            },
                        ]
                    }
                },
            },
        },
    },
}