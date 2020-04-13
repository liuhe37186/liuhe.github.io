<template>
  <div>
    <operationTitle :items="items"></operationTitle>
    <div class="temp12">
      <div class="top" @click="itemClick(items.data[0])">
        <img class="image" :src="items.data[0].image"/>
      </div>
      <div class="bottom">
        <div class="item" v-for="(item,index) in bottomItem" :key="index" @click="itemClick(item)">
          <!-- <goods2 :goods="item"></goods2> -->
          <img class="image" :src="item.image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import goods2 from "./Goods_2";

export default {
  name: "template_10",
  props: ["items"],
  // components: { goods2 },
  data() {
    return {
      bottomItem: this.items.data.splice(1)
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
  /* height: 206px; */
  padding: 20px;
}
.temp12 .top .image{
  width: 100%;
  height: 300px;
  background-color: grey;
}
.temp12 .bottom {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  /* flex-wrap: wrap; */
}
.temp12 .bottom .item {
  margin-top: 0px;
}

.temp12 .item .image {
  width: 250px;
  height: 250px;
  background-color: grey;
  margin-left: 20px;
  display: block;
}
</style>