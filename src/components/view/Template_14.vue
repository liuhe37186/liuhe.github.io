<template>
  <div>
    <div>temp14</div>
    <div class="temp14">
      <div class="bottom">
        <div class="item" v-for="item in items" :key="item.id" @click="itemClick(item)">
          <goods1 :goods="item"></goods1>
          <!-- <div class="image">{{item.id}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goods1 from "./Goods_1";

export default {
  name: "template_10",
  props: ["items"],
  components: { goods1 },
  data() {
    return {
      // bottomItem: this.items.splice(1)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp14 Item", item.id);
    }
  }
};
</script>

<style>
.temp14 {
  width: 100%;
}
.temp14 .top {
  width: 720px;
  height: 206px;
  margin: 15px;
  background-color: blue;
}
.temp14 .bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp14 .bottom .item {
  margin-top: 0px;
  width: 352.5px;
  margin-left: 15px;
}
</style>