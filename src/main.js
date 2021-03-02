import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    render: h => h(App),
    components: { App }
}).$mount('#app')