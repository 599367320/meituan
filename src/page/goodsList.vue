<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <!-- 面包屑导航 -->
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <!-- 分类 区域 -->
          <categroy />
        </el-row>
        <el-row>
          <!-- 展示列表 -->
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">
        <div class="map">
          <img src="../assets/img/map.png" alt="腾讯地图" />
        </div>
        <!-- 猜你喜欢 -->
        <like />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from '@/components/products/crumbs.vue'
import Categroy from '@/components/products/categroy.vue'
import List from '@/components/products/list.vue'
import Like from '@/components/products/like.vue'

export default {
  components: {
    crumbs,
    Categroy,
    List,
    Like
  }
}
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";

.map {
  margin-left: 10px;
}
</style>
