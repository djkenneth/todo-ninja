import Vue from 'vue';

// import search from './views/Search.vue';

Vue.component('search',
  () => import('./views/Search.vue')
)