import {request} from './request'

export function getAsideMenu() {
  return request({
    method: 'get',
    url: '/menus'
  })
}
export function getUserList(config) {
  return request({
    method: 'get',
    url: '/users',
    params: config
  })
}
export function changeUserState(id, state) {
  return request({
    method: 'put',
    url: '/users/'+id+'/state/'+state
  })
}
export function addUser(config) {
  return request({
    method: 'post',
    url: '/users',
    data: config
  })
}
export function queryUserById(id) {
  return request({
    method: 'get',
    url: '/users/'+id
  })
}
export function deleteUserById(id) {
  return request({
    method: 'delete',
    url: '/users/'+id
  })
}
export function editUserById(id, config) {
  return request({
    method: 'put',
    url: '/users/'+id,
    data: config
  })
}