<template>
  <div>
    <div>temp13</div>
    <div class="temp13">
      <div class="top" @click="itemClick(items[0])">
        <goods3 :goods="item"></goods3>
      </div>
      
    </div>
  </div>
</template>

<script>
import goods3 from "./Goods_3";

export default {
  name: "template_10",
  props: ["items"],
  components: { goods3 },
  data() {
    return {
      bottomItem: this.items.splice(1)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp13 Item", item.id);
    }
  }
};
</script>

<style>
.temp13 {
  width: 100%;
}
.temp13 .top {
  width: 720px;
  height: 206px;
  margin: 15px;
  background-color: white;
}
.temp13 .bottom {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  /* flex-wrap: wrap; */
}
.temp13 .bottom .item {
  margin-top: 0px;
  width: 200px;
  margin-left: 15px;
}
</style>