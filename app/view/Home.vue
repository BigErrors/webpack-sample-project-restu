<template>
  <div id="home">
    <div class="title">
      Hello, this content is from homePage
    </div>
    <div class="btn"><button @click="print">打印测试</button></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 123
    }
  },
  methods: {
    print () {
      console.log('调试输出测试')
    }
  }
}
</script>