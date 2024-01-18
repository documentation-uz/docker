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
                            text: 'Setup project',
                            link: '/tutorial/images-and-containers/setup-project'
                        },
                        {
                            text: 'Create Dockerfile',
                            link: '/tutorial/images-and-containers/create-dockerfile'
                        },
                        {
                            text: 'Build the first image',
                            link: '/tutorial/images-and-containers/build-the-first-image'
                        },
                        {
                            text: 'Run the first container',
                            link: '/tutorial/images-and-containers/run-the-first-container'
                        },
                        {
                            text: 'Start container',
                            link: '/tutorial/images-and-containers/start-container'
                        },
                        {
                            text: 'Auto remove container',
                            link: '/tutorial/images-and-containers/auto-remove-container'
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
