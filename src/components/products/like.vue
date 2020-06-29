<template>
  <dl class="like-list">
    <dt>
      <div class="label">猜你喜欢</div>
    </dt>
    <dd v-for="item in likeList" :key="item.itemId">
      <a href="#">
        <div class="like-wrapper">
          <div class="img-box">
            <img
              src="https://p0.meituan.net//joymerchant/1587726507938194581-3043341-1538042248059.jpg@188w_106h_1e_1c"
              class="image"
            />
          </div>
          <div class="info-box">
            <div class="title">{{ item.title }}</div>
            <p class="assess">
              <el-rate :value="+item.score" disabled show-score text-color="#ff9900" score-template></el-rate>
              <span class="num">{{ item.firstCate.length }}个评价</span>
            </p>
            <p class="address">{{ item.areaName }}</p>
            <p class="price">
              <span>￥</span>
              <span class="money">{{ item.lowPrice }}</span>
              <span>起</span>
            </p>
          </div>
        </div>
      </a>
    </dd>
  </dl>
</template>

<script>
import api from '@/api/index.js'

export default {
  data () {
    return {
      likeList: []
    }
  },
  created () {
    api.getRecommendList().then(res => {
      this.likeList = res.data.data
    })
  }
}
</script>

<style lang="scss">
@import "@/assets/css/products/like.scss";
</style>
