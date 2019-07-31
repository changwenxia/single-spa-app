import Vue from 'vue';
import main from './main.vue'
import singleSpaVue from 'single-spa-vue';
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    render: r => r(main)
  } 
});

// 初始化
export const bootstrap = [
  vueLifecycles.bootstrap,
];
// 加载
export const mount = [
  vueLifecycles.mount,
];
// 卸载
export const unmount = [
  vueLifecycles.unmount,
];

