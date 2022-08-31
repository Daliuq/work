import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/**
  plug
      ElementUI
         Pubsub
        Axios*/
//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//PubSub
import PubSub from 'pubsub-js'
Vue.use(PubSub)

//Axios
import Axios from 'axios';
    //Axios global configuration
    Vue.prototype.$axios=Axios;
    //默认路径
    Axios.defaults.baseURL='/api'
    //设置post请求的内容类型，为json格式
    Axios.defaults.headers.post['Content-Type']='application/json'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
