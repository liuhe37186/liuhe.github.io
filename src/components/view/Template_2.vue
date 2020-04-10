<template>
  <div>
    <operationTitle :items="items"></operationTitle>
    <div class="temp2">
    <div class="item" v-for="(item,index) in items.data" :key="index" @click="itemClick(item)">
      <img class="image" :src="item.image"/>
      <div class="text">{{item.name}}</div>
    </div>
  </div>

  </div>
  
</template>

<script>
export default {
  name: "template_2",
  props: ["items"],
  methods:{
      itemClick(item){
          console.log("点击 temp2 Item", item.id);
      }
  }
};
</script>

<style>
.temp2 {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp2 .item {
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 187.5px;
  /* margin-left: 66.8px; */

  margin-top: 20px;
}
.temp2 .item .image {
  width: 80px;
  height: 80px;
  /* margin-left: 66.8px; */
  /* background-color: red; */
  /* border-radius: 52px; */
}
.temp2 .item .text {
  /* width: 104px; */
  text-align: center;
  font-size: 26px;
  margin-top: 17px;
  color: #333333;
}
</style>