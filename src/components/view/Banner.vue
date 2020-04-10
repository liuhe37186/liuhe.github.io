<template>
  <div class="banner">
    <operationTitle :items="items"></operationTitle>
    <div class="image-container">
      <swiper :options="options">
        <swiper-slide v-for="(item,index) in bannerItem" :key="index">
          <div @click="bannerClick(item)">
            <img :src="item.image" class="banner-image" />
            <!-- <div>{{item.visitUrl}}</div> -->
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css"; //引入swiper的css样式
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "banner",
  props: ["items"], //获取传递进来的数据
  components: {
    swiper,
    swiperSlide,
    // operationTitle
  },
  data() {
    return {
      bannerItem: this.items.data,
      //swiper的配置参数
      options: {
        //自动滚动
        autoplay: {
          delay: 5000, //自动滚动间隔时间
          disableOnInteraction: false //是否允许用户打断滑动，默认为true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        centeredSlides: true,
        paginationClickable: true
      }
    };
  },
  methods: {
    bannerClick(item) {
      console.log("点击banner", item);
    }
  }
};
</script>

<style>
/* .banner { */
  /* height: 300px; */
/* } */
.banner .image-container {
  padding: 20px;
  background-color: white;
}
.banner .banner-image {
  width: 100%;
  height: 300px;
  min-height: 300px;
  min-width: 100%;
  /* border-radius: 5px; */
  /* background-color: blue; */
}
</style>