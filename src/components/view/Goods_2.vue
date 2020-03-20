<template>
  <div class="goods2">
    <div class="goods-img"></div>
    <div class="goods-text">
      <div>商品名称</div>
      <div>商品描述</div>
      <div>￥1000</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods2",
  props: ["goods"]
};
</script>

<style>
.goods2{
  /* width: 352.5px; */
}
.goods2 .goods-img {
  width: 200px;
  height: 200px;
  background-color: red;
}

.goods2 .goods-text{
    width: 200px;
    text-align: left;
    font-size: 28px;/*px*/
}
</style>