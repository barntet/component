import { App } from 'vue';
import XButton from './button';
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';

// 导出单独组件
export { XButton, SFCButton, JSXButton };

// 写一个插件实现install方法
export default {
  install(app: App): void {
    app.component(XButton.name, XButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
