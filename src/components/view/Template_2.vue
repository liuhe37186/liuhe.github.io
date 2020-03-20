<template>
  <div>
    <div>temp2</div>
    <div class="temp2">
    <div class="item" v-for="item in items" :key="item.id" @click="itemClick(item)">
      <div class="image"></div>
      <div class="text">icon {{item.id}}</div>
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
  margin-left: 66.8px;
  margin-top: 20px;
}
.temp2 .item .image {
  width: 104px;
  height: 104px;
  background-color: red;
  border-radius: 52px;
}
.temp2 .item .text {
  width: 104px;
  text-align: center;
  font-size: 28px;/*px*/
  margin-top: 22px;
}
</style>