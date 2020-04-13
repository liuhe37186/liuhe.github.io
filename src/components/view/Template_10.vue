<template>
  <div class="temp10-container">
    <operationTitle :items="items"></operationTitle>
    <!-- <div>{{items.slot_name}}</div> -->
    <div class="temp10">
      <div class="top" @click="itemClick(items.data[0])">
        <img class="image" :src="items.data[0].image"/>
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

.temp10-container{
  display: block;
}

.temp10 {
  width: 100%;
}
.temp10 .top {
  /* height: 206px; */
  padding: 20px 20px 0 20px;
}
.temp10 .top .image{
  width: 100%;
  height: 206px;
  background-color: grey;
}
</style>