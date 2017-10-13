<template>
  <div id="app">
    <v-index></v-index>
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
