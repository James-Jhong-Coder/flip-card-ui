// src/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: () => {
      const token = localStorage.getItem('token');
      if (token) {
        return {
          name: 'dashboard',
        };
      }
      return {
        name: 'login',
      };
    },
  },
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
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: () => {
      return {
        name: 'login',
      };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

// 一律導去 login，但避免無限 loop
router.beforeEach((to) => {
  const token = localStorage.getItem('token');
  // 在沒有 token 的情況下，要去有 token 才能進入的頁面都導去 login
  if (to.meta.requiresAuth && !token) {
    return {
      name: 'login',
    };
  }

  // 在有 token 的情況下，去不需要 token 的頁面，都導去 dashboard
  if (to.meta.guestOnly && token) {
    return {
      name: 'dashboard',
    };
  }
  return true;
});

export default router;
