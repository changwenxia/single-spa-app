import { registerApplication, start } from 'single-spa'
import './src/common/index.css'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from 'vue';
import token  from './src/common/index.js'
Vue.use(ElementUI);
Vue.prototype.token = token


registerApplication(
  'vue', 
  () => import('./src/common/vue.app.js'),
  () => location.pathname === "/react" ? false : true
);

// registerApplication(
//   'react',
//   () => import('./src/react/main.app.js'),
//   () => location.pathname === "/vue"  ? false : true
// );

start();

