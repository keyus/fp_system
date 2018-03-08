import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import subsiderNavbar from './components/subsider-navbar';
import 'element-ui/lib/theme-chalk/index.css';
import './scss/index.scss'

Vue.use(ElementUI);
Vue.component(subsiderNavbar.name,subsiderNavbar);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
