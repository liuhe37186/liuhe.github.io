<template>
  <div>
   <operationTitle :items="items"></operationTitle>
    <div class="temp7">
      <div class="top" @click="itemClick(items.data[0])">
        <img class="image" :src="items.data[0].image"/>
      </div>
      <div class="bottom">
        <div class="item" v-for="(item,index) in bottomItem" :key="index" @click="itemClick(item)">
          <img class="image" :src="item.image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "template_7",
  props: ["items"],
  data() {
    return {
      bottomItem: this.items.data.splice(1,3)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp7 Item", item.id);
    }
  }
};
</script>

<style>
.temp7 {
  width: 100%;
  margin-top: 10px;
}
.temp7 .top {
  height: 300px;
  padding: 20px;
}
.temp7 .top .image{
  width: 100%;
  height: 100%;
  background-color: grey;
  display: block;
}
.temp7 .bottom {
  height: 230px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp7 .item {
  margin-top: 0px;
}
.temp7 .item .image {
  width: 223.3px;
  height: 223.3px;
  background-color: grey;
  margin-left: 20px;
}
</style>