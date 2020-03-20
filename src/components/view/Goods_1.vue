<template>
  <div class="goods1">
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
  name: "goods1",
  props: ["goods"]
};
</script>

<style>
.goods1{
  width: 352.5px;
}
.goods1 .goods-img {
  width: 352.5px;
  height: 170px;
  background-color: red;
}

.goods1 .goods-text{
    width: 352.5px;
    text-align: left;
    font-size: 28px;/*px*/
}
</style>