<template>
  <div>
    <operationTitle :items="items"></operationTitle>
    <div class="temp9">
      <div class="left" @click="itemClick(items[0])">
        <img class="image" :src="items.data[0].image"/>
      </div>
      <div class="right">
        <div class="right-container" v-for="(item,index) in rightItem" :key="index" @click="itemClick(item)">
          <img class="image" :src="item.image" />
        </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "template_9",
  props: ["items"],
  data() {
    return {
      rightItem: this.items.data.splice(1,2)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp9 Item", item.id);
    }
  }
};
</script>

<style>
.temp9 {
  width: 100%;
  height: 475px;
  display: flex;
  flex-direction: row;
}
.temp9 .left .image{
  width: 345px;
  height: 100%;
  margin-left: 20px;
  margin-top: 20px;
  background-color: grey;
}
.temp9 .right {
  height: 100%;
}
.temp9 .right .right-container{
  background-color: white;
  
}

.temp9 .right .right-container .image {
  width: 345px;
  height: 227.5px;
  background-color: grey;
  margin-left: 20px;
  margin-top: 20px;
  display: block;
}
</style>