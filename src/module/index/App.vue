<template>
  <div id="app">
    <mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
  </div>
</template>
 <script type="text/ecmascript-6">
 import vIndex from '../../component/index/index'
    export default {
        data() {
            return {
            }
        },
        components: {
          vIndex
        },
        methods: {
        },
        mounted(){
          this.$nextTick(()=>{
          })
        }
    }
</script>
