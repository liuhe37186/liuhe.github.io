<template>
  <div class="temp8">
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
  name: "template_8",
  props: ["items"],
  data() {
    return {
      bottomItem: this.items.splice(1)
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
  width: 720px;
  height: 206px;
  margin: 15px;
  background-color: blue;
}
.temp8 .bottom{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp8 .item {
  margin-top: 0px;
}
.temp8 .item .image {
  width: 168.75px;
  height: 168.75px;
  background-color: red;
  margin-left: 15px;
}
</style>