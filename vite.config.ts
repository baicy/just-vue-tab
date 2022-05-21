import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // element-ui
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 路径别名, 用@表示/src
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8080, // 项目启动端口
    // 配置热更新
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    }
  }
})
