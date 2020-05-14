import axios from 'axios'


export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/private/v1',
    timeout: 5000
  })
  // instance.interceptors.response.use(function(res) {
  //   return res.data
  // })
  instance.interceptors.request.use(res => {
    res.headers.Authorization = window.sessionStorage.getItem('token')
    return res
  })
  return instance(config)
}