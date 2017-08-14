import axios from 'axios'
//import Qs from 'qs'

const DEV_BASE_URL = 'https://github.com/abner27625/f7vue/tree/master/myapp/mockapi'
//const PROD_BASE_URL = 'http://www.kuaidi100.com/'
const PROD_BASE_URL = 'https://github.com/abner27625/f7vue/tree/master/myapp/mockapi'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? DEV_BASE_URL : PROD_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Headers']='Authorization,Origin, X-Requested-With, Content-Type, Accept';

/*export default {
  post: function (url, data) {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    let config = {
      //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
      url: url,

      // 请求方法同上
      method: 'post', // default
      // 基础url前缀
      baseURL: 'https://github.com/abner27625/f7vue/tree/master/myapp/mockapi',

      transformRequest: [function (data) {
        // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
        data = Qs.stringify({});
        return data;
      }],

      transformResponse: [function (data) {
        // 这里提前处理返回的数据

        return data;
      }],

      // 请求头信息
      headers: {'X-Requested-With': 'XMLHttpRequest'},

      //parameter参数
      params: {
        timestamp: Date.parse(new Date()) / 1000
      },

      //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
      data: data,

      //设置超时时间
      timeout: 5000,
      //返回数据类型
      responseType: 'json', // default
    }
    return axios.post(url, data, this.config)
  }
}*/

// Add a request interceptor
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(response => {
  let data = response.data
  return !data.err_code ? data : Promise.reject(data)
}, error => {
  return Promise.reject(error)
})
