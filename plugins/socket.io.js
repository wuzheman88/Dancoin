import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
// import socketio from 'socket.io-client'

export default ({ app, store }) => {
  // This way we can use it in middleware and pages asyncData/fetch
  Vue.use(VueSocketio, 'localhost:3001', store)
}
