import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import ele from 'https://element.eleme.cn/2.7/#/zh-CN/component/table'


const routes=[
 {
   path: '*',
   component: ele 
 },
 {
  path: '/ele',
  component: ele 
  },
]

const router = new VueRouter({
  routes,
});

export default router;