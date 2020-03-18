<template>
  <div class="temp6">
    <!-- <img :src="items[0].opsPic"/> -->
    <div class="top" @click="itemClick(items[0])"></div>
    <div class="bottom">
      <div class="item" v-for="item in bottomItem" :key="item.id" @click="itemClick(item)">
        <div class="image"></div>
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
      bottomItem: this.items.splice(1)
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
  width: 100%;
  margin-top: 10px;
}
.temp6 .top {
  width: 720px;
  height: 206px;
  margin: 15px;
  background-color: blue;
}
.temp6 .bottom{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp6 .item {
  margin-top: 0px;
}
.temp6 .item .image {
  width: 352.5px;
  height: 170px;
  background-color: red;
  margin-left: 15px;
}
</style>