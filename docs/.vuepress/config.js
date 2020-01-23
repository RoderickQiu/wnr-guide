module.exports = {
    theme: 'api',
    head: [
        ['link', { rel: 'icon', href: './favicon.ico' }]
    ],
    port: 9311,
    locales: {
        '/': {
            lang: 'en-US',
            title: 'wnr',
            text: 'English',
            description: 'The website and guide of wnr. ',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'wnr',
            text: '简体中文',
            description: 'wnr的指南与官网。',
        }
    }
}