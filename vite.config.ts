// 如果test那段报错，可以添加下面的类型定义声明
/** /// <reference types="vitest" /> */
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';

import Unocss from './config/unocss'

// https://vitejs.dev/config/


const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    // jsx插件
    vueJsx(),
    // 添加UnoCSS插件
    Unocss()

  ],
  //  添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true, // 决定编译时是否独立输出css
    lib: {
      entry: './src/entry.ts',
      name: 'MyUI',
      fileName: 'my-ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife']
    }
  },
  // test
  test: {
    //  enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // support tsx component this very important
    // Support for tsx components is important
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
