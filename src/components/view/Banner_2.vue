<template>
  <div class="banner2">
    <img class="banner-img" :src="banner.image"/>
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
  width: 258px;
  height: 300px;
  background-color: grey;
}

</style>