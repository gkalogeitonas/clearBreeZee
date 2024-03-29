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
  {
    component: () => import('layouts/MainLayout.vue'),
    path: '/settings2',
    children: [
      { path: '', component: () => import('pages/settings/SettingsPage2.vue') }
      // { path: '/manage-places', component: () => import('pages/settings/ManagePlaces.vue') }
    ]
  },
  {
    path: '/map',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MapPage.vue') } // New route for MapPage.vue
    ]
  },
  {
    path: '/personal-info',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PersonalInfo.vue') } // New route for MapPage.vue
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
