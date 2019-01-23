<template>
  <div>
    <div class="contaniner fixed-conta">
      <section class="list">
        <figure>
          <img src="../assets/images/list-ban01.png">
        </figure>
        <div class="search">
          <input type="search" placeholder="韩版卫衣">
          <label>
            <img src="../assets/images/list-search.png">
          </label>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <span>全部</span>
              </a>
            </li>
            <li class="list-active">
              <a href="#">
                <span>销量</span>
                <img src="../assets/images/up-red.png">
              </a>
            </li>
            <li>
              <a href="#">
                <span>价格</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>评价</span>
              </a>
            </li>
          </ul>
        </nav>
        <ul class="wall" v-for="(item,index) of list" :key="index">
          <li class="pic">
            <router-link :to="{name:'detail',params:{id:item.id}}" >
              <img :src=item.url>
              <p>{{item.title}}</p>
              <b>{{item.price}}</b>
              <del>{{item.oldprice}}</del>
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:''
    }
  },
  mounted(){
    axios({
      url:'/data/product.data'
    }).then(res=>{
      this.list = res.data.shangpin
    })
  }
}
</script>
