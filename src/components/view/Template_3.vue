<template>
  <div>
    <div>
      <img v-if="items.title_mode == 1" class="title-image" :src="items.image">
      <div v-else-if="items.title_mode == 2" class="title">{{items.slot_name}}</div>
    </div>
    <div class="temp3">
      <div class="item" v-for="item in items.data" :key="item.id" @click="itemClick(item)">
        <img class="image" :src="item.image"/>
        <div class="text">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "template_3",
  props: ["items"],
  methods: {
    itemClick(item) {
      console.log("点击 temp3 Item", item.id);
    }
  }
};
</script>

<style>
.temp3 {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp3 .item {
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 150px;
  margin-top: 20px;
}
.temp3 .item .image {
  width: 80px;
  height: 80px;
  /* background-color: red; */
  /* border-radius: 40px; */
}
.temp3 .item .text {
  /* width: 80px; */
  text-align: center;
  font-size: 28px;
  margin-top: 22px;
}
</style>