import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';

const colors = [
  'white',
  'black',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink'
]

// 这里需要预设颜色和icon不然在项目中使用不了
const safelist = [

  // 图标预设
  ...["search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share"].map(v => `i-ic-baseline-${v}`),
  // 添加颜色
  ...colors.map(v => `bg-${v}-100`),
  ...colors.map(v => `bg-${v}-400`),
  ...colors.map(v => `bg-${v}-500`),
  ...colors.map(v => `hover:bg-${v}-100`),
  ...colors.map(v => `hover:bg-${v}-300`),
  ...colors.map(v => `hover:bg-${v}-400`),
  ...colors.map(v => `hover:bg-${v}-500`),
  ...colors.map(v => `border-${v}-400`),
  ...colors.map(v => `border-${v}-500`),
  ...colors.map(v => `text-${v}-500`),
  ...colors.map(v => `hover:text-${v}-500`),
  'text-white',
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'].map(v => `text-${v}`),
  ...['rounded-full', 'founded-lg'],
]

export default () =>
  Unocss({
    safelist,
    presets: [
      presetUno(),
      presetAttributify(),
      // 添加图标预设  
      presetIcons()]
  })