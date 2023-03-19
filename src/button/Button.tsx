import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "block"
  | "gray"
  | "red"
  | "yellow"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export type IIcon =
  | "search"
  | "edit"
  | "check"
  | "message"
  | "star-off"
  | "delete"
  | "add"
  | "share"
  | "";

export type ISize = "small" | "medium" | "large";
export const props = {
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 默认色
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String as PropType<IIcon>,
    default: "",
  },
};
export default defineComponent({
  name: "XButton",
  props, // 注册属性
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    return () => (
      <button
        class={`
        py-${size[props.size].y}
        px-${size[props.size].x}
        ${props.round ? "rounded-full" : "rounded-lg"}
        bg-${props.color}-${props.plain ? "100" : "500"}
        hover:bg-${props.color}-400
        border-${props.color}-${props.plain ? "500" : "500"}
        cursor-pointer
        border-solid
        text-${props.plain ? props.color + "-500" : "white"}
        text-${size[props.size].text}
        hover:text-white
        transition duration-300 ease-in-out transform hover:scale-105
        m-1
    `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
