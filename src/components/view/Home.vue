<template>
  <div class="home">
    <!-- <h1>这是title</h1> -->
    <banner :items="bannerItem"></banner>
    <template2 :items="template2Item"></template2>
    <template3 :items="template3Item"></template3>
    <template6 :items="template6Item"></template6>
    <template7 :items="template7Item"></template7>
    <template8 :items="template8Item"></template8>
    <template9 :items="template9Item"></template9>
    <template10 :items="template10Item"></template10>
    <template11 :items="template11Item"></template11>
    <template12 :items="template12Item"></template12>
    <template13 :items="template13Item"></template13>
    <template14 :items="template14Item"></template14>
    <template15 :items="template15Item"></template15>
    <template16 :items="template16Item"></template16>
  </div>
</template>

<script>
import banner from "./Banner.vue";
import template2 from "./Template_2";
import template3 from "./Template_3";
import template6 from "./Template_6";
import template7 from "./Template_7";
import template8 from "./Template_8";
import template9 from "./Template_9";
import template10 from "./Template_10";
import template11 from "./Template_11";
import template12 from "./Template_12";
import template13 from "./Template_13";
import template14 from "./Template_14";
import template15 from "./Template_15";
import template16 from "./Template_16";
export default {
  name: "home",
  components: {
    banner,
    template2,
    template3,
    template6,
    template7,
    template8,
    template9,
    template10,
    template11,
    template12,
    template13,
    template14,
    template15,
    template16,
  },

  data() {
    return {
      bannerItem: [
        {
          opsPic:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584699562421&di=b73df66f4a735d535f34d46ef43f1835&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          id: 1
        },
        {
          opsPic:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2424569854,325583504&fm=26&gp=0.jpg",
          id: 2
        },{
          opsPic:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4047717572,2067067998&fm=26&gp=0.jpg",
          id: 3
        }
      ],
      template2Item:[
        {id:1},{id:2},{id:3},{id:4},{id:5}
      ],
      template3Item:[
        {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}
      ],
      template6Item:[
        {id:1},{id:2},{id:3}
      ],
      template7Item:[
        {id:1},{id:2},{id:3},{id:4}
      ],
      template8Item:[
        {id:1},{id:2},{id:3},{id:4},{id:5}
      ],
      template9Item:[
        {id:1},{id:2},{id:3}
      ],
      template10Item:[
        {id:1}
      ],
      template11Item:[
        {id:1},{id:2},{id:3}
      ],
      template12Item:[
        {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}
      ],
      template13Item:[
        {id:1}
      ],
       template14Item:[
        {id:1},{id:2},{id:3},{id:4}
      ],
      template15Item:[
        {id:1},{id:2},{id:3},{id:4},{id:5}
      ],
      template16Item:[
        {id:1},{id:2},{id:3},{id:4},{id:5}
      ],
    };
  }
};
</script>

<style>

.home{
  padding: 40px 0;
}
</style>