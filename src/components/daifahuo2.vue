<template>
  <div>
    <div class="contaniner fixed-cont">
      <section class="go-order">
        <h3>
          <img src="../assets/images/b-iocn01.png">
          <span>待发货</span>
        </h3>
        <dl class="map">
          <dt>
            <img src="../assets/images/a-icon02.png">
          </dt>
          <dd>
            <span>弱小喵</span>
            <small>17756084251</small>
            <p>安徽省合肥市高新区科学大道天波路浙商大厦a座806</p>
          </dd>
        </dl>
        <div class="order-shop">
          <dl>
            <router-link to="/detail/1">
              <dt>
                <img src="../assets/images/index-ph01.png">
              </dt>
              <dd>
                <p>超级大品牌服装，现在够买只要998</p>
                <small>颜色：经典绮丽款</small>
                <span>尺寸：L</span>
                <input type="button" value="退货/退款">
                <b>￥32.00</b>
                <strong>×3</strong>
              </dd>
            </router-link>
          </dl>
          <ul>
            <li>
              <span>运费</span>
              <small>包邮</small>
            </li>
            <li>
              <span>商品总额</span>
              <small>￥98.00</small>
            </li>
            <li>
              <p>下单时间：2015-1125 22:04:41
                <br>订单编号：214484605204859
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
