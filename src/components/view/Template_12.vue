<template>
  <div>
    <div>temp12</div>
    <div class="temp12">
      <div class="top" @click="itemClick(items[0])">
        <div class="image"></div>
      </div>
      <div class="bottom">
        <div class="item" v-for="item in bottomItem" :key="item.id" @click="itemClick(item)">
          <goods2 :goods="item"></goods2>
          <!-- <div class="image">{{item.id}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goods2 from "./Goods_2";

export default {
  name: "template_10",
  props: ["items"],
  components: { goods2 },
  data() {
    return {
      bottomItem: this.items.splice(1)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp12 Item", item.id);
    }
  }
};
</script>

<style>
.temp12 {
  width: 100%;
}
.temp12 .top {
  height: 206px;
  padding: 15px;
}
.temp12 .top .image{
  width: 100%;
  height: 206px;
  background-color: blue;
}
.temp12 .bottom {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  /* flex-wrap: wrap; */
}
.temp12 .bottom .item {
  margin-top: 0px;
  width: 200px;
  margin-left: 15px;
}
</style>