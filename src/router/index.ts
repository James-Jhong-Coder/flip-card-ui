// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { guestOnly: true, title: '登入' },
  },
  {
    path: '/app',
    component: () => import('@/layouts/AppLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/app/quiz',
    name: 'quiz',
    component: () => import('@/views/Quiz.vue'),
    meta: { requiresAuth: true, transition: 'quiz-fade' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

// 一律導去 login，但避免無限 loop
router.beforeEach((to) => {
  // if (to.name !== 'login') {
  //   return { name: 'login' };
  // }
  return true;
});

export default router;
