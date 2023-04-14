import { openBlock, createElementBlock, createElementVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "content": { "": { "textAlign": "center", "height": "400rpx", "marginTop": "200rpx" } } };
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "content" }, [
      createElementVNode("u-text", null, " \u9875\u9762 - 5 ")
    ])
  ]);
}
const tabbar5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/tjh/studio/uni-app/signin-record/pages/tabbar/tabbar-5/tabbar-5.nvue"]]);
export {
  tabbar5 as default
};
