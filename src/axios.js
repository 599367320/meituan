import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com' // 请求的根路径

// 请求拦截器
axios.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        appkey: 'love_sin_1593138646956'
    }
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

export default axios