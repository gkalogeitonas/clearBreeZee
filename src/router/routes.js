const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    component: () => import('layouts/MainLayout.vue'),
    path: '/settings',
    children: [
      { path: '', component: () => import('pages/settings/SettingsPage.vue') },
      { path: '/manage-places', component: () => import('pages/settings/ManagePlaces.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
