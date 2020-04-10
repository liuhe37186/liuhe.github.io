<template>
  <div>
    <operationTitle :items="items"></operationTitle>
    <div class="temp6">
      <!-- <img :src="items[0].opsPic"/> -->
      <div class="top" @click="itemClick(items.data[0])">
        <img class="image" :src="items.data[0].image"/>
      </div>
      <div class="bottom">
        <div class="item" v-for="item in bottomItem" :key="item.id" @click="itemClick(item)">
          <img class="image" :src="item.image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "template_6",
  props: ["items"],
  data() {
    return {
      bottomItem: this.items.data.splice(1,2)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp6 Item", item.id);
    }
  }
};
</script>

<style>
.temp6 {
  /* width: 100%; */
  margin-top: 10px;
}
.temp6 .top {
  height: 300px;
  padding: 20px;
}
.temp6 .top .image{
  width: 100%;
  height: 100%;
  background-color: blue;
}
.temp6 .bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp6 .item {
  margin-top: 0px;
}
.temp6 .item .image {
  width: 345px;
  height: 230px;
  background-color: gray;
  margin-left: 20px;
}
</style>