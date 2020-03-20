<template>
  <div>
    <div>temp16</div>
    <div class="temp16">
      <!-- <div class="top" @click="itemClick(items[0])"></div> -->
      <div class="bottom">
        <div class="item" v-for="item in items" :key="item.id" @click="itemClick(item)">
          <banner2 :goods="item"></banner2>
          <!-- <div class="image">{{item.id}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner2 from "./Banner_2";

export default {
  name: "template_10",
  props: ["items"],
  components: { banner2 },
  data() {
    return {
      // bottomItem: this.items.splice(1)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp16 Item", item.id);
    }
  }
};
</script>

<style>
.temp16 {
  width: 100%;
}
.temp16 .top {
  width: 720px;
  height: 206px;
  margin: 15px;
  background-color: blue;
}
.temp16 .bottom {
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  /* flex-wrap: wrap; */
}
.temp16 .bottom .item {
  margin-top: 0px;
  width: 280px;
  margin-left: 15px;
}
</style>