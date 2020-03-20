// 横向排列商品
<template>

  <div class="goods3">
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
  name: "goods3",
  props: ["goods"]
};
</script>

<style>
.goods3{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.goods3 .goods-img {
  width: 200px;
  height: 200px;
  background-color: red;
}

.goods3 .goods-text{
    margin-left: 20px;
    width: 500px;
    text-align: left;
    font-size: 28px;/*px*/
}
</style>