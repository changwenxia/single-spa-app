import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import app from './main.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app',
    render: r => r(app)
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



