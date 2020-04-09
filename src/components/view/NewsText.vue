// 横向排列商品
<template>

  <div class="news-text">
    
    <div class="news-left">
      <div>新闻标题名称</div>
      <div class="news-number">
        <div>收藏</div>
        <div>点赞</div>
      </div>
      
    </div>
    <div class="news-img"></div>
  </div>
  
</template>

<script>
export default {
  name: "news-text",
  props: ["news"]
};
</script>

<style>
.news-text{
  /* width: 100%; */
  display: flex;
  flex-direction: row;
}
.news-text .news-img {
  width: 270px;
  height: 170px;
  margin-left: 30px;
  background-color: red;
}

.news-text .news-left{

    width: calc(100% - 300px);
    text-align: left;
    font-size: 28px;/*px*/
    display: flex;
    flex-direction: column;
}
.news-text .news-left .news-number{
   display: flex;
    flex-direction: row;
}
</style>