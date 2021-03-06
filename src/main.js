import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";

import Carousel3d from 'vue-carousel-3d';
 
Vue.use(Carousel3d);

new Vue({
  render: h => h(App),
}).$mount('#app')
