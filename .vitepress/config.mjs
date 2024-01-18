import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Docker documentation",
    description: "Docker documentation in Uzbek language",
    srcDir: "src/pages/",
    cleanUrls: true,
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
            {text: 'Tutorial', link: '/tutorial/', activeMatch: '/tutorial/'},
            {text: 'API reference', link: '/api-reference/', activeMatch: '/api-reference/'}
        ],

        sidebar: {
            '/tutorial/': [
                {
                    text: 'Images & Containers',
                    collapsed: true,
                    items: [
                        {
                            text: 'What is images and containers?',
                            link: '/tutorial/images-and-containers/what-is-images-and-containers'
                        }
                    ]
                },
                {
                    text: 'Managing Data & Working with Volumes',
                    collapsed: true,
                    items: [
                        {
                            text: 'Understanding Data',
                            link: '/tutorial/managing-data-and-working-with-volumes/understanding-data'
                        }
                    ]
                },
            ],
            '/api-reference/': [
                {
                    text: 'Docker CLI',
                    items: []
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/documentation-uz/docker'}
        ]
    }
})
