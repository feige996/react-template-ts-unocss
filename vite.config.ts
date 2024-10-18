import react from '@vitejs/plugin-react'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(process.cwd(), 'src'),
    },
  },
  plugins: [
    react(),
    UnoCSS(),
    createSvgIconsPlugin({
      iconDirs: [
        // 指定包含图标的文件夹
        path.resolve(process.cwd(), 'src/assets/svg'),
      ],
      symbolId: 'icon-[dir]-[name]', // 生成的符号 ID 的模板
    }),
  ],
})
