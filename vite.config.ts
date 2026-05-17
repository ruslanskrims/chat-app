import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(() => {
  return {
    plugins: [vue(), vueJsx(), vueDevTools(), ElementPlus({})],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    base: process.env.NODE_ENV === 'production' ? `/chat-app/` : '/',
  }
})
