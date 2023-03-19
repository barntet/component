import DefaultTheme from 'vitepress/theme';
import MyUI from '../../../src/entry'
// 插件组件
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.use(MyUI); // 这个是组件库的组件，
    // 将插件，注册为全局组件
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock)

  }
}