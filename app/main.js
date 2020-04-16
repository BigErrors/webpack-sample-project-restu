import Vue from 'vue' //模板模式
// import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import greeter from './Greeter'

// 模板模式
new Vue({
  render: h => h(App)
}).$mount('#app')
document.querySelector('#greet').appendChild(greeter.a())


// new Vue({
//   el: '#root',
//   data: {
//     message: 'wang'
//   }
// })
// document.querySelector('#root').appendChild(greeter.a())

