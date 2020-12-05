import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import TimerComponent from '@/components/TimerComponent';
import StopWatchComponent from '@/components/StopWatchComponent';
import AlarmComponent from '@/components/AlarmComponent';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

library.add(fas);
library.add(far);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'timer-page',
      component: TimerComponent
    },
    {
      path: '/stopWatch',
      name: 'stopWatch-page',
      component: StopWatchComponent
    },
    {
      path: '/alarm',
      name: 'alarm-page',
      component: AlarmComponent
    },
  ]
})


new Vue({
  el: "#app",
  router,
  render: h => h(App),
})
