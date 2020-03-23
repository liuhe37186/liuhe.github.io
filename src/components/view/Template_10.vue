<template>
  <div>
    <div>temp10</div>
    <div class="temp10">
      <div class="top" @click="itemClick(items[0])">
        <div class="image"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "template_10",
  props: ["items"],
  data() {
    return {
      // bottomItem: this.items.splice(1)
    };
  },
  methods: {
    itemClick(item) {
      console.log("点击 temp10 Item", item.id);
    }
  }
};
</script>

<style>
.temp10 {
  /* width: 100%; */
}
.temp10 .top {
  height: 206px;
  padding: 15px;
}
.temp10 .top .image{
  width: 100%;
  height: 206px;
  background-color: brown;
}
</style>