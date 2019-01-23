<template>
  <div>
    <section class="shop" v-for="(item,index) of list" :key="index">
      <h3>
        <router-link to="/list">
          {{item.pinlei}}
          <span>
            <img src="../assets/images/right.png">
          </span>
        </router-link>
      </h3>
      <dl>
        <dd v-for="(item,index) of item.list" :key="index">
          <router-link to="/list">
            <img :src=item.url>
            <b>{{item.title}}</b>
          </router-link>
        </dd>
      </dl>
    </section>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:''
    }
  },
  mounted() {

    //this.$root.bgloading=true
    axios({
      url: "/data/index.data"
    }).then(res => {
      // console.log(res.data);
      // setTimeout(()=>{
        this.list = res.data;
        //this.$root.bgloading=false
      // },500)
    });
  }
};
</script>