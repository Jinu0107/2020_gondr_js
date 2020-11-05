import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// new Vue({
//   el : "#app",
//   render: h => h(App),
// });
// 위아래 둘다 같은거



new Vue({
  render: h => h(App),
}).$mount('#app')
