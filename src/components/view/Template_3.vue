<template>
  <div>
    <div>----temp3-----</div>
    <div class="temp3">
      <div class="item" v-for="item in items" :key="item.id" @click="itemClick(item)">
        <div class="image"></div>
        <div class="text">icon {{item.id}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "template_3",
  props: ["items"],
  methods: {
    itemClick(item) {
      console.log("点击 temp3 Item", item.id);
    }
  }
};
</script>

<style>
.temp3 {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.temp3 .item {
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 58.3px;
  margin-top: 20px;
}
.temp3 .item .image {
  width: 80px;
  height: 80px;
  background-color: red;
  border-radius: 40px;
}
.temp3 .item .text {
  width: 80px;
  text-align: center;
  font-size: 28px;
  margin-top: 22px;
}
</style>