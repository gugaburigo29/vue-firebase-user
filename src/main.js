import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import {store} from './store/store'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons/index'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyARKABUCXeCt_9zAKtx4AgJEQ9F_msfEBo',
      authDomain: 'produtos-ad179.firebaseapp.com',
      databaseURL: 'https://produtos-ad179.firebaseio.com',
      projectId: 'produtos-ad179',
      messagingSenderId: '947620477835',
      storageBucket: ''
    })
  }
})
