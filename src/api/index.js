import axios from '@/axios.js'

var api = {
  // 热门商品
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 搜索
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  // 全部分类
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 有格调
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 产品列表
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  // 产品推荐列表
  getRecommendList () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  // 分类列表
  getClassifyList () {
    return axios.get('/api/meituan/list/classify.json')
  },
  // 区域列表
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  // 热门城市
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  // 最近访问
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 省份列表
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  // 当前位置
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  // 城市列表
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  // 登录
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  // 注册
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
