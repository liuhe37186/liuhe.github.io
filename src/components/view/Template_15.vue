<template>
  <div>
    <operationTitle :items="items"></operationTitle>
    <div class="temp15">
      <!-- <div class="top" @click="itemClick(items[0])"></div> -->
      <div class="bottom">
        <div class="item" v-for="item in items.data" :key="item.id" @click="itemClick(item)">
          <banner1 :banner="item"></banner1>
          <!-- <div class="image">{{item.id}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner1 from "./Banner_1";

export default {
  name: "template_10",
  props: ["items"],
  components: { banner1 },
  data() {
    return {
      // bottomItem: this.items.splice(1)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp15 Item", item.id);
    }
  }
};
</script>

<style>
.temp15 {
  width: 100%;
}
.temp15 .top {
  width: 720px;
  height: 206px;
  margin: 15px;
  background-color: grey;
}
.temp15 .bottom {
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-top: 20px;
  /* flex-wrap: wrap; */
}
.temp15 .bottom .item {
  margin-top: 0px;
  /* width: 500px; */
  margin-left: 20px;

}
</style>