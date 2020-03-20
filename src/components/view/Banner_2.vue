<template>
  <div class="banner2">
    <div class="banner-img"></div>
    <div class="banner-text">
      <div>艺术</div>
      <div>像花儿一样灿烂</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "banner2",
  props: ["banner"]
};
</script>

<style>
.banner2{
  /* width: 352.5px; */
}
.banner2 .banner-img {
  width: 280px;
  height: 280px;
  background-color: red;
}

.banner2 .banner-text{
    width: 280px;
    text-align: left;
    font-size: 28px;/*px*/
}
</style>