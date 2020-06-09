import {request} from './request'

export function postLoginInfo(config) {
  return request({
    method: 'post',
    url:'login',
    params: {
      username: config.username,
      password: config.password
    }
  })
}
