import request from '@/utils/request'

export function getSystem() {
  return request({
    url: '/showsystem',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  })
}


export function optionSystem(data) {
  return request({
    url: '/showsystem',
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: data
  })
}
