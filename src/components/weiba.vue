<template>
  <div>
    <footer class="page-footer fixed-footer">
      <ul>
        <li>
          <router-link  to='/home' active-class="active">
            <img src="../assets/images/footer01.png">
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/fenglei" active-class="active">
            <img src="../assets/images/footer002.png">
            <p>分类</p>
          </router-link>
        </li>
        <li>
          <router-link to="/buycar" active-class="active">
            <img src="../assets/images/footer003.png">
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link  to="/gerenzhongxin" active-class="active">
            <img src="../assets/images/footer004.png">
            <p>个人中心</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<style scoped>
.active p{ color: #fc605a;}
/* .active img{color:#fc605a; } */
</style>

