import { defineComponent } from "vue";

export default defineComponent({
  name: "JSXButton",
  render() {
    return <button>JSX button</button>; // jsx报错，只需要在tsconfig中配置一下jsx的语法支持， compilerOptions.jsx = 'preserve', 意思：不对 JSX 进行改变并生成 .jsx 文件
  },
});
