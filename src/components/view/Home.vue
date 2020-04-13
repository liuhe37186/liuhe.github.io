<template>
  <div class="home">
    <!-- <h1>这是title</h1> -->
    <div v-for="item in list" :key="item.template_id+item.slot_name+item.slot_id">
      <!-- {{item.slot_id}} -->
      <banner v-if="item.template_id == 1" :items="item"></banner>
      <template2 v-if="item.template_id == 2" :items="item"></template2>
      <template3 v-if="item.template_id == 3" :items="item"></template3>
      <template6 v-if="item.template_id == 6" :items="item"></template6>
      <template7 v-if="item.template_id == 7" :items="item"></template7>
      <template8 v-if="item.template_id == 8" :items="item"></template8>
      <template9 v-if="item.template_id == 9" :items="item"></template9>
      <template10 v-if="item.template_id == 10" :items="item"></template10>
      <template11 v-if="item.template_id == 11" :items="item"></template11>
      <template12 v-if="item.template_id == 12" :items="item"></template12>
      <template13 v-if="item.template_id == 13" :items="item"></template13>
      <template14 v-if="item.template_id == 14" :items="item"></template14>
      <template15 v-if="item.template_id == 15" :items="item"></template15>
      <template16 v-if="item.template_id == 16" :items="item"></template16>
      <template17 v-if="item.template_id == 17" :items="item"></template17>
    </div>
    <!-- <template6 :items="template6Item"></template6>
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
    <template17 :items="template17Item"></template17> -->
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
import template17 from "./Template_17";
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
    template17
  },

  data() {
    return {
      list: [
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 9,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 1,
          sort: 1,
          login_mode: true,
          slot_name: "Banner",
          type: true,
          link_h5: "https://www.baidu.com",
          title_mode: 0
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "精选课程",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "老人风采",
              id: 11,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "精彩资讯",
              id: 12,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 17,
          link_mp: "d",
          template_id: 2,
          sort: 1,
          login_mode: true,
          slot_name: "icon每行4个",
          type: true,
          link_h5: "ds",
          title_mode: 0
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "数据位",
              id: 13,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数位",
              id: 14,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "数据位",
              id: 14,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测数据位",
              id: 14,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "数据位",
              id: 14,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数",
              id: 14,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 18,
          link_mp: "d",
          template_id: 3,
          sort: 1,
          login_mode: true,
          slot_name: "icon每行5个",
          type: true,
          link_h5: "",
          title_mode: 2
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 9,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 6,
          sort: 1,
          login_mode: true,
          slot_name: "上1图下2图",
          type: true,
          link_h5: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          title_mode: 1
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 9,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 7,
          sort: 1,
          login_mode: true,
          slot_name: "上1图下3图",
          type: true,
          link_h5: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          title_mode: 2
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 9,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 8,
          sort: 1,
          login_mode: true,
          slot_name: "上1图下4图",
          type: true,
          link_h5: "",
          title_mode: 2
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 9,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 12,
          sort: 1,
          login_mode: true,
          slot_name: "上1图下多图",
          type: true,
          link_h5: "",
          title_mode: 2
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 10,
          sort: 1,
          login_mode: true,
          slot_name: "单行单图 10",
          type: true,
          link_h5: "http:",
          title_mode: 2
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 9,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 9,
          sort: 1,
          login_mode: true,
          slot_name: "左1图右2图",
          type: true,
          link_h5: "",
          title_mode: 2
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 9,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 15,
          sort: 1,
          login_mode: true,
          slot_name: "1+1/4banner 15",
          type: true,
          link_h5: "https://www.baidu.com",
          title_mode: 2
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          data: [
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 7,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 8,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 9,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            },
            {
              image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586758310881&di=7891b1dfddc06503f9014d2c6fc5a725&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
              link_mp: "d",
              name: "测试数据位",
              id: 10,
              sort: 1,
              login_mode: true,
              link_h5: "ds"
            }
          ],
          slot_id: 16,
          link_mp: "d",
          template_id: 16,
          sort: 1,
          login_mode: true,
          slot_name: "2+1/2banner 16",
          type: true,
          link_h5: "https://www.baidu.com",
          title_mode: 2
        }
      ],
      
      bannerItem: [
        {
          opsPic:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584699562421&di=b73df66f4a735d535f34d46ef43f1835&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01554f59a3d3cda8012028a9901540.jpg%401280w_1l_2o_100sh.jpg",
          id: 1
        },
        {
          opsPic:
            "http://img0.imgtn.bdimg.com/it/u=2424569854,325583504&fm=26&gp=0.jpg",
          id: 2
        },
        {
          opsPic:
            "http://img1.imgtn.bdimg.com/it/u=3661153975,2974630288&fm=26&gp=0.jpg",
          id: 3
        }
      ],
      template2Item: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      template3Item: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 }
      ],
      template6Item: [{ id: 1 }, { id: 2 }, { id: 3 }],
      template7Item: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      template8Item: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      template9Item: [{ id: 1 }, { id: 2 }, { id: 3 }],
      template10Item: [{ id: 1 }],
      template11Item: [{ id: 1 }, { id: 2 }, { id: 3 }],
      template12Item: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 }
      ],
      template13Item: [{ id: 1 }],
      template14Item: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      template15Item: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      template16Item: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      template17Item: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
  },
  created(){
    console.log("created$enter")
    this.getHomeData();
    console.log("created$exit")
  },
  mounted(){
   
  },
  methods:{
    getHomeData(){
      console.log("getHomeData-enter",process.env.VUE_APP_BASEURL)
      console.log("getHomeData$post:",this.$post)
      this.$get("index_data/1.html").then(res =>{
        console.log("res:",res);
      },error=>{
        console.log("error",error)
      })
    }
  }
};
</script>

<style>
.home {
  padding: 40px 0;
}
</style>