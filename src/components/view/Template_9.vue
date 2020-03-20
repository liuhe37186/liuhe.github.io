<template>
  <div>
    <div>temp9</div>

    <div class="temp9">
      <!-- <img :src="items[0].opsPic"/> -->
      <div class="left" @click="itemClick(items[0])"></div>
      <div class="right">
        <div class="item" v-for="item in rightItem" :key="item.id" @click="itemClick(item)">
          <div class="image"></div>
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
      rightItem: this.items.splice(1)
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
  /* margin-top: 1px; */
  display: flex;
  flex-direction: row;
}
.temp9 .left {
  width: 405px;
  height: 505px;
  /* margin: 15px; */
  margin-left: 15px;
  margin-top: 15px;
  background-color: blue;
}
.temp9 .right {
  /* display: inline; */
  display: flex;
  flex-direction: column;
}
.temp9 .item {
  margin-top: 0px;
}
.temp9 .item .image {
  width: 300px;
  height: 245px;
  background-color: red;
  margin-left: 15px;
  margin-top: 15px;
}
</style>