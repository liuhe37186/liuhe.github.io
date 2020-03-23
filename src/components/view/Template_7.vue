<template>
  <div>
    <div>temp7</div>

    <div class="temp7">
      <!-- <img :src="items[0].opsPic"/> -->
      <div class="top" @click="itemClick(items[0])">
        <div class="image"></div>
      </div>
      <div class="bottom">
        <div class="item" v-for="item in bottomItem" :key="item.id" @click="itemClick(item)">
          <div class="image"></div>
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
      bottomItem: this.items.splice(1)
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
  height: 206px;
  padding: 15px;
}
.temp7 .top .image{
  width: 100%;
  height: 100%;
  background-color: blue;
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
  width: 230px;
  height: 230px;
  background-color: red;
  margin-left: 15px;
}
</style>