<template>
  <div>
    <!-- <h1>这是title</h1> -->
    <banner :items="bannerItem"></banner>
    <template2 :items="template2Item"></template2>
    <template3 :items="template3Item"></template3>
  </div>
</template>

<script>
import banner from "./Banner.vue";
import template2 from "./Template_2";
import template3 from "./Template_3";
export default {
  name: "home",
  components: {
    banner,
    template2,
    template3,
  },

  data() {
    return {
      bannerItem: [
        {
          opsPic:
            "https://tk-conline-20190225-1257840667.cos.ap-beijing.myqcloud.com/conline-test/banner.jpg",
          id: 1
        },
        {
          opsPic:
            "https://tk-conline-20190225-1257840667.cos.ap-beijing.myqcloud.com/online-customer/1581478851959758.png",
          id: 2
        }
      ],
      template2Item:[
        {id:1},{id:2},{id:3},{id:4},{id:5}
      ],
      template3Item:[
        {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}
      ]
    };
  }
};
</script>