<template>
  <div id="app">
     <loading v-show="bLoading"></loading>
    <weiba v-show="bWeiba"></weiba>
    <!-- <loading v-show="this.$root.bgloading"></loading> 非状态管理 this.$root -->
   
    <router-view/>
  </div>
</template>

<style>
</style>

<script>
import weiba from "./components/weiba";
import loading from "./components/loading/components/loading";
import {mapGetters} from "vuex";
import * as types from './store/types.js';


export default {
  components: {weiba,loading},
  computed:mapGetters(['bLoading','bWeiba']),
  watch:{
    
    $route:{
      handler:function(to){
        // console.log(this.$store.state.bLoading)
        let path = to.path;
          this.$store.dispatch(types.VIEW_WEIBA,false)
        if(/home|buycar|gerenzhongxin|fenglei/.test(path)){
          this.$store.dispatch(types.VIEW_WEIBA,true)
        }
      },
       immediate:true
    }
  }
};
</script>

