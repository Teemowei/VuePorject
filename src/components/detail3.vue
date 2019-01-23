
<template>
  <div>
    	<div class="contaniner fixed-contb">
		<section class="detail">
			<detail2 :msg='list'></detail2>
			<dl class="jiage">
				<dt>
					<h3>{{list.title}}</h3>
					<div class="collect">
						<img src="../assets/images/detail-heart-hei.png"/>
						<p>收藏</p>
					</div>
				</dt>
				<dd>
					<b>{{list.price}}</b>
					<del>{{list.oldprice}}</del>
					<input type="button" value="￥10.00" readonly />
					<small>+356积分</small>
				</dd>
			</dl>
			
			<div class="chose">
				<ul>
					<h3>颜色</h3>
					<li>
						黑色
					</li>
					<li class="chose-active">
						粉色
					</li>
					<li>
						灰色
					</li>
					<li>
						红色
					</li>
				</ul>
				<ul>
					<h3>尺寸</h3>
					<li>
						L
					</li>
					<li class="chose-active">
						XL
					</li>
					<li>
						XXL
					</li>
				</ul>
			</div>
			
			<a href="#" class="seven">
				<b>7</b>天无理由退换货
			</a>
			
			<ul class="same">
				<a href="#">
					<span>
						同类推荐
					</span>
					<li class="one">
						<img src="../assets/images/detail-pp01.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="../assets/images/detail-pp02.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="../assets/images/detail-pp03.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="../assets/images/detail-pp04.png"/>
						<p>￥188.00</p>
					</li>
				</a>
			</ul>
			
			<article class="detail-article">
				<nav>
					<ul>
						<li>商品详情</li>
						<li class="article-active">评价</li>
					</ul>
				</nav>
				<section class="talkbox">
					<ul class="talk" v-for="(item,index) of list1" :key="index">
						<li>
							<figure><img src="../assets/images/detail-tou.png"/></figure>
							<dl>
								<dt>
									<p>{{item.name}}</p>
									<time>2015.11.17</time>
									<div class="star">
										<span><img src="../assets/images/detail-iocn01.png"/></span>
										<span><img src="../assets/images/detail-iocn01.png"/></span>
										<span><img src="../assets/images/detail-iocn01.png"/></span>
										<span><img src="../assets/images/detail-iocn001.png"/></span>
										<span><img src="../assets/images/detail-iocn001.png"/></span>
									</div>
								</dt>
								<dd>{{item.pinglun}}</dd>
								<small>{{item.small}}</small>
								<div class="picbox">
									<img src="../assets/images/detail-pp01.png"/>
									<img src="../assets/images/detail-pp02.png"/>
									<img src="../assets/images/detail-pp03.png"/>
									<img src="../assets/images/detail-pp04.png"/>
								</div>
							</dl>
						</li>
					</ul>
				</section>
				
			</article>
		</section>
	</div>
  </div>
</template>
<script>
import detail2 from "./detail2";;
export default {
	data(){
		return {
			list:'',
			list1:''
		}
	},
	components:{
		detail2
	},
	mounted() {
		axios({
			url:"/data/product.data"
		}).then(res=>{
			// console.log(this.$route.params.id)
			// console.log(res.data)
			this.list = res.data.shangpin[(this.$route.params.id-1)];
			// console.log(this.list)
			this.list1 = res.data.pinglun
		})
	},
};
</script>