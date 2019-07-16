import { registerApplication, start } from 'single-spa'


// registerApplication(
//   'vue1', 
//   () => import('./src/vue/vue.app.js'),
//   () => location.pathname === "/react" ? false : true
// );

registerApplication(
  'vue2', 
  () => import('./src/vue2/vue.app.js'),
  () => location.pathname === "/react" ? false : true
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue"  ? false : true
);

start();