import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI)
import main from './main.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue2',
    render: r => r(main)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];