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
                text: 'Get started',
                items: [
                    {text: 'Introduction', link: '/get-started/introduction'},
                    {text: 'Installation', link: '/get-started/installation'},
                ]
            },
            {
                text: 'Essentials', link: '/essentials/',
                items: [
                    {text: 'Containerize an application', link: '/quick-start/containerize-an-application'},
                    {text: 'Update the application', link: '/quick-start/update-the-application'},
                    {text: 'Persist the data', link: '/quick-start/persist-the-data'},
                    {text: 'Bind mounts', link: '/quick-start/bind-mounts'},
                    {text: 'Multi container apps', link: '/quick-start/multi-container-apps'},
                    {text: 'Docker compose', link: '/quick-start/docker-compose'},
                ]
            },
            {
                text: 'Advanced', link: '/advanced/',
                items: []
            },
            {
                text: 'API reference', link: '/api-reference/',
                items: [
                    {
                        text: 'Dockerfile', link: '/api-reference/dockerfile/', collapsed: true,
                        items: [
                            {text: 'FROM', link: '/api-reference/dockerfile/from'},
                            {text: 'RUN', link: '/api-reference/dockerfile/run'},
                            {text: 'CMD', link: '/api-reference/dockerfile/cmd'},
                            {text: 'LABEL', link: '/api-reference/dockerfile/label'},
                            {text: 'MAINTAINER', link: '/api-reference/dockerfile/maintainer'},
                            {text: 'EXPOSE', link: '/api-reference/dockerfile/expose'},
                            {text: 'ENV', link: '/api-reference/dockerfile/env'},
                            {text: 'ADD', link: '/api-reference/dockerfile/add'},
                            {text: 'COPY', link: '/api-reference/dockerfile/copy'},
                            {text: 'ENTRYPOINT', link: '/api-reference/dockerfile/entrypoint'},
                            {text: 'VOLUME', link: '/api-reference/dockerfile/volume'},
                            {text: 'USER', link: '/api-reference/dockerfile/user'},
                            {text: 'WORKDIR', link: '/api-reference/dockerfile/workdir'},
                            {text: 'ARG', link: '/api-reference/dockerfile/arg'},
                            {text: 'ONBUILD', link: '/api-reference/dockerfile/onbuild'},
                            {text: 'STOPSIGNAL', link: '/api-reference/dockerfile/stopsignal'},
                            {text: 'HEALTHCHECK', link: '/api-reference/dockerfile/healthcheck'},
                            {text: 'SHELL', link: '/api-reference/dockerfile/shell'},
                        ]
                    },
                    {
                        text: 'Compose file', link: '/api-reference/compose-file/', collapsed: true,
                        items: []
                    },
                    {
                        text: 'Docker CLI', link: '/api-reference/docker-cli/', collapsed: true,
                        items: [
                            {text: 'attach', link: '/api-reference/docker-cli/attach'},
                            {text: 'build', link: '/api-reference/docker-cli/build'},
                        ]
                    },
                    {
                        text: 'Compose CLI', link: '/api-reference/compose-cli/', collapsed: true,
                        items: [
                            {text: 'build', link: '/api-reference/compose-cli/build'},
                            {text: 'up', link: '/api-reference/compose-cli/up'},
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/documentation-uz/docker'}
        ]
    }
})
