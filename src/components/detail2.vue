<template>
  <div>
    <div class="contaniner fixed-contb">
      <section class="detail">
        <figure class="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <a href="#">
                <img :src='msg.url'>
              </a>
            </li>
            <li class="swiper-slide">
              <a href="#">
                <img :src='msg.url'>
              </a>
            </li>
            <li class="swiper-slide">
              <a href="#">
                <img :src='msg.url'/>
              </a>
            </li>
            <li class="swiper-slide">
              <a href="#">
                <img :src='msg.url'>
              </a>
            </li>
          </ul>
          <div class="swiper-pagination"></div>
        </figure>
      </section>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
    props:['msg'],
    mounted(){
        let swiper = new Swiper('.swiper-container',{
            autoplay:true,
            loop:true
        })
    }
};
</script>