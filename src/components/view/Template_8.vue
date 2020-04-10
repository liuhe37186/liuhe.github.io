<template>
  <div>
    <operationTitle :items="items"></operationTitle>
    <div class="temp8">
      <!-- <img :src="items[0].opsPic"/> -->
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
  name: "template_8",
  props: ["items"],
  data() {
    return {
      bottomItem: this.items.data.splice(1,4)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp8 Item", item.id);
    }
  }
};
</script>

<style>
.temp8 {
  width: 100%;
  margin-top: 10px;
}
.temp8 .top {
  height: 300px;
  padding: 20px;
}
.temp8 .top .image{
  width: 100%;
  height: 300px;
  background-color: blue;
}
.temp8 .bottom {
  height: 168.75px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp8 .item {
  margin-top: 0px;
}
.temp8 .item .image {
  width: 162.5px;
  height: 162.5px;
  background-color: grey;
  margin-left: 20px;
}
</style>