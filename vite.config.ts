import { defineConfig } from 'vite'
import '@slidev/cli'
import MarkdownItMagicLink from 'markdown-it-magic-link'

export default defineConfig({
  build: {
     cssMinify: 'esbuild',
  },
  slidev: {
    markdown: {
      markdownSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            // e.g. 'NuxtLabs': { link: 'https://github.com/slidevjs/slidev', imageUrl: 'https://nuxtlabs.com/icon.png' },
            'Slidev': 'https://github.com/slidevjs/slidev',
          },
        })
      },
    },
  },
})
