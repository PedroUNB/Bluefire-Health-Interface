
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/home/PageHome.vue') },
      { path: 'contacts', component: () => import('pages/contacts/PageContacts.vue') },
      { path: 'camera', component: () => import('pages/camera/PageCamera.vue') },
      { path: 'health', component: () => import('pages/health/PageHealth.vue') },
    ]
  },

  {
    path: '/auth',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: 'login', component: () => import('pages/login/PageLogin.vue') },
      { path: 'register', component: () => import('pages/register/PageRegister.vue') },
    ]
  },

  {
    path: '*',
    component: () => import('pages/error/PageError.vue')
  }
]

export default routes
