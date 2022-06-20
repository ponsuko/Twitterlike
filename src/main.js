import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(firestorePlugin)

firebase.initializeApp({   
  apiKey: "AIzaSyA6s8qu-Ixdy9fZh6fvczaBrdH40nSwNi8",
  authDomain: "whisperer-65cb7.firebaseapp.com",
  databaseURL: "https://whisperer-65cb7-default-rtdb.firebaseio.com",
  projectId: "whisperer-65cb7",
  storageBucket: "whisperer-65cb7.appspot.com",
  messagingSenderId: "601121321631",
  appId: "1:601121321631:web:52cb919567658232de28aa"
});

export const db = firebase.firestore()
export const auth = firebase.auth()

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
