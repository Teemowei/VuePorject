<template>
  <div>
    <div class="contaniner fixed-contb">
      <section class="self">
        <dl>
          <dt>
            <router-link to="order">
              <img src="../assets/images/self-icon.png">
              <b>全部订单</b>
              <span>
                <img src="../assets/images/right.png">
              </span>
            </router-link>
          </dt>
          <dd>
            <ul>
              <li>
                <router-link to="daifahuo">
                  <img src="../assets/images/order-icon01.png">
                  <p>待发货</p>
                </router-link>
              </li>
              <li>
                <router-link to="daifahuo">
                  <img src="../assets/images/order-icon03.png">
                  <p>待付款</p>
                </router-link>
              </li>
              <li>
                <router-link to="daifahuo">
                  <img src="../assets/images/order-icon02.png">
                  <p>待收货</p>
                </router-link>
              </li>
              <li>
                <router-link to="daifahuo">
                  <img src="../assets/images/order-icon04.png">
                  <p>待评价</p>
                </router-link>
              </li>
            </ul>
          </dd>
        </dl>

        <ul class="self-icon">
          <li>
            <a href="datum.html">
              <img src="../assets/images/self-icon01.png">
              <p>个人信息</p>
              <span>
                <img src="../assets/images/right.png">
              </span>
            </a>
          </li>
          <li>
            <a href="mycollect.html">
              <img src="../assets/images/self-icon02.png">
              <p>我的收藏</p>
              <span>
                <img src="../assets/images/right.png">
              </span>
            </a>
          </li>
          <li>
            <a href="integral.html">
              <img src="../assets/images/self-icon03.png">
              <p>我的积分</p>
              <span>
                <img src="../assets/images/right.png">
              </span>
            </a>
          </li>
          <li>
            <a href="addres.html">
              <img src="../assets/images/self-icon04.png">
              <p>地址管理</p>
              <span>
                <img src="../assets/images/right.png">
              </span>
            </a>
          </li>
        </ul>
        <ul class="self-icon">
          <li>
            <a href="none.html">
              <img src="../assets/images/self-icon05.png">
              <p>我的分销</p>
              <span>
                <img src="../assets/images/right.png">
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/self-icon06.png">
              <p>邀请好友</p>
              <span>
                <img src="../assets/images/right.png">
              </span>
            </a>
          </li>
        </ul>
        <router-link to="/login">
          <input type="button" value="退出">
        </router-link>
      </section>
    </div>
  </div>
</template>
