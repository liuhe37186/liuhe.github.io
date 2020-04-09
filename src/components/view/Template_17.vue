<template>
  <div>
    <div>temp17</div>
    <div class="temp17">
      <div class="top" v-for="item in items" :key="item.id">
        <newsText :news="item"></newsText>
      </div>
    </div>
  </div>
</template>

<script>
import newsText from "./NewsText";

export default {
  name: "template_17",
  props: ["items"],
  components: { newsText },
  data() {
    return {
      // bottomItem: this.items.splice(1)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp17 Item", item.id);
    }
  }
};
</script>

<style>
.temp17 {
  /* width: 100%; */
}
.temp17 .top {
  margin: 15px;
  background-color: white;
}


</style>