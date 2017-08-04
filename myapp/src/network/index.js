import axios from 'axios'

const DEV_BASE_URL = 'http://127.0.0.1:8080'
//const PROD_BASE_URL = 'http://www.kuaidi100.com/'
const PROD_BASE_URL = 'http://127.0.0.1:8080'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? DEV_BASE_URL : PROD_BASE_URL

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
