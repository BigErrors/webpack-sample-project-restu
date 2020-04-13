import Vue from 'vue' //模板模式
// import Vue from 'vue/dist/vue.esm.js'
import test from './view/test.vue'
import App from './App.vue'
import greeter from './Greeter'

// 模板模式
new Vue({
  el: '#root',
  render: h => h(App)
}).$mount('#app')
document.querySelector('#app').appendChild(greeter.a())


// new Vue({
//   el: '#root',
//   data: {
//     message: 'wang'
//   }
// })
// document.querySelector('#root').appendChild(greeter.a())

