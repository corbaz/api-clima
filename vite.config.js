import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/api-clima/',
  plugins: [react()],
  preview: {
    port: 9999,
    host: 'localhost',
    // https: true,
    // https: {
    //   key: fs.readFileSync('./certs/localhost.key'),
    //   cert: fs.readFileSync('./certs/localhost.crt')
    // },
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }  
  }
})
