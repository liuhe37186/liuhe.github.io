<template>
  <div class="banner1">
    <img class="banner-img" :src="banner.image"/>
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
  width: 580px;
  height: 270px;
  background-color: red;
}

</style>