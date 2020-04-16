<template>
  <div id="app">
    <div class="appPageMsg">{{message}}
    </div>
    <home/>
    <div id="greet"></div>
  </div>
</template>
<script>
import home from './view/Home.vue'
export default {
  name: 'app',
  components: {
    home: home
  },
  data () {
    return {
      message: 'This massage from appPage'
    }
  }
}
</script>

<style>
  html, body{
    padding: 0;
    margin: 0;
  }
</style>
<style lang='less'>
  @import url('./static/css/app.less');
</style>