import request from '@/utils/request';
import { getUserToken } from '@/utils/authority';
export async function query(params) {
  const token = getUserToken()
  console.log('query', params)
  if (!params) {
    params = {
      payload: {
        pageSize: 10,
        currentPage: 1,
        keyword: ''  
      }
    }
  }
  if (!params.payload) {
    params.payload = {
      pageSize: 10,
      currentPage: 1,
      keyword: ''
    }
  }
  if (!params.payload.pageSize) {
    params.payload.pageSize = 10
  }
  if (!params.payload.currentPage) {
    params.payload.currentPage = 1
  }
  if (!params.payload.keyword) {
    params.payload.keyword = ''
  }
  return request(`/server/api/manager/user?pageSize=${params.payload.pageSize}&pageNum=${params.payload.currentPage}&keyword=${params.payload.keyword}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function queryCurrent() {
  const token = getUserToken();
  return request('/server/api/user/currentUser', { headers: { Authorization: `Bearer ${token}` } });
}

export async function updateUser(params) {
  const token = getUserToken();
  return request('/server/api/user', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: {
      method: 'put',
      ...params,
    },
  });
}

export async function addUser(params) {
  const token = getUserToken();
  console.log('add user', params)
  return request('/server/api/manager/user', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: params,
  });
}