const content = require('./config.json')

// require 接收
// module.exports = () => {
//   let greet = document.createElement('div')
//   greet.textContent = content.greeting
//   return greet
// }


// import { _ } 接收 
// let a = () => {
//   let greet = document.createElement('div')
//   greet.textContent = content.greeting
//   return greet
// }
// exports = { a }


// import * 接收
let a = () => {
  let greet = document.createElement('div')
  greet.textContent = content.greeting
  return greet
}
export default { a }