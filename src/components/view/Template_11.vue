<template>
  <div>
    <div>temp11</div>
    <div class="temp11">
      <div class="top" @click="itemClick(items[0])"></div>
      <div class="bottom">
        <div class="item" v-for="item in bottomItem" :key="item.id" @click="itemClick(item)">
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
      bottomItem: this.items.splice(1)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp11 Item", item.id);
    }
  }
};
</script>

<style>
.temp11 {
  width: 100%;
}
.temp11 .top {
  width: 720px;
  height: 206px;
  margin: 15px;
  background-color: blue;
}
.temp11 .bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp11 .bottom .item {
  margin-top: 0px;
  width: 352.5px;
  margin-left: 15px;
}
</style>