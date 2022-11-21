import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { IonicResolver } from 'unplugin-vue-components/resolvers'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [IonicResolver()]
    }),
    dts({
      exclude: ["node_modules/**", "src/components/*.vue"],
    })
  ],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'FormkitIonic',
      fileName: "formkit-ionic",
      formats: ['es']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', "@formkit/vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
