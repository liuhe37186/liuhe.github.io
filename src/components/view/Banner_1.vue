<template>
  <div class="banner1">
    <div class="banner-img"></div>
    <div class="banner-text">
      <div>艺术课程|家庭艺术插花课</div>
      <div>让我们的家园像花儿一样灿烂</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "banner1",
  props: ["banner"]
};
</script>

<style>
.banner1{
  /* width: 352.5px; */
}
.banner1 .banner-img {
  width: 500px;
  height: 300px;
  background-color: red;
}

.banner1 .banner-text{
    width: 500px;
    text-align: left;
    font-size: 28px;/*px*/
}
</style>