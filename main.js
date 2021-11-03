import Vue from 'vue'
import App from './App.vue'

import BaseCard from '@/components/UI/BaseCard'
import BaseButton from '@/components/UI/BaseButton'
import BaseDialog from '@/components/UI/BaseDialog'

Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);
Vue.component('base-dialog', BaseDialog);

new Vue({
  render: h => h(App),
}).$mount('#app')
