// import { createApp } from 'vue';

import App from './App.vue';

import Vue from 'vue'


import TheHeader from '@/components/TheHeader.vue';
import BaseBadge from '@/components/BaseBadge.vue';
import BadgeList from '@/components/BadgeList.vue';
import UserInfo from '@/components/UserInfo.vue';



Vue.component('the-header', TheHeader);
Vue.component('base-badge', BaseBadge);
Vue.component('badge-list', BadgeList);
Vue.component('user-info', UserInfo);

// app.mount('#app');

new Vue({
    render: h => h(App),
  }).$mount('#app')
  
  