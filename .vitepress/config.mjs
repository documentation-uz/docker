import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Docker documentation",
    description: "Docker documentation in Uzbek language",
    srcDir: "src/pages/",
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://www.docker.com/wp-content/uploads/2023/04/cropped-Docker-favicon-192x192.png'
        }],
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/documentation-uz/docker/tree/main/src/pages/:path',
            text: 'Edit this page on GitHub',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Documentation', link: '/quick-start/introduction'}
        ],

        sidebar: [
            {
                text: 'Quick start',
                items: [
                    {text: 'Introduction', link: '/quick-start/introduction'},
                    {text: 'Containerize an application', link: '/quick-start/containerize-an-application'},
                    {text: 'Update the application', link: '/quick-start/update-the-application'},
                ]
            },
            {
                text: 'Essentials', link: '/essentials/',
                items: []
            },
            {
                text: 'Advanced', link: '/advanced/',
                items: []
            },
            {
                text: 'API reference', link: '/api-reference/',
                items: []
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/documentation-uz/docker'}
        ]
    }
})
