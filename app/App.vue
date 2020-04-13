<template>
  <div id="app">
    hello this is app.vue
    <div>
      {{ message }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'zhang'
    }
  }
}
</script>