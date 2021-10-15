// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import('../components/common/Home') // 동적 import
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/views/Login')
  },
  {
    path:'/test',
    name: 'Test',
    component: () => import('../components/views/Test')
  }
];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

export const router = createRouter({
  history: createWebHistory(),
  routes,
});