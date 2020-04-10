<template>
  <div>
    <operationTitle :items="items"></operationTitle>
    <div class="temp3">
      <div class="item" v-for="(item,index) in items.data" :key="index" @click="itemClick(item)">
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
  width: 70px;
  height: 70px;
  /* background-color: red; */
  /* border-radius: 40px; */
}
.temp3 .item .text {
  /* width: 80px; */
  text-align: center;
  font-size: 24px;
  margin-top: 29px;
  color: #333333;
}
</style>