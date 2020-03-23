<template>
  <div class="banner">
    <swiper :options="options">
      <swiper-slide v-for="item in bannerItem" :key="item.id">
        <div @click="bannerClick(item)">
          <img :src="item.opsPic" alt />
          <!-- <div>{{item.visitUrl}}</div> -->
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
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
    swiperSlide
  },
  data() {
    return {
      bannerItem: this.items,
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

<style >
.banner {
  height: 340px;
  padding: 15px;
  background-color: green;
}
.banner img {
  width: 100%;
  height: 340px;
  min-height: 340px;
  min-width: 100%;
  border-radius: 5px;
  background-color: blue;
}
</style>