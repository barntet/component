// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler.js'; // 更换的原因是这个版本才能在运行时对模版进行编译

import XButton from './button';
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';

const btn = {
  template: `
  <div>
    <XButton color="blue" icon='search'>蓝色按钮</XButton>
    <XButton color="green" icon='edit'>绿色按钮</XButton>
    <XButton color="gray" icon='check'>灰色按钮</XButton>
    <XButton color="yellow" icon='message'>蓝色按钮</XButton>
    <XButton color="red" icon='delete'>红色按钮</XButton>
  </div>
`,
};

const app = createApp(btn).component('XButton', XButton).mount('#app');

// app.component(SButton)
