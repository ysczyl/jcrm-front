import request from '../utils/request';
import { getUserToken } from '@/utils/authority'
export async function queryTask(params) {
  const token = getUserToken();
  console.log(params)
  return request('/server/api/task/query', {
    headers: { Authorization: `Bearer ${token}`},
    method: 'POST',
    body: {
      ...params,
      method: 'post'
    }
  });
}

export async function getTaskDetails(params) {
  const token = getUserToken();  
  return request(`/server/api/task/detail/${params}`, {
    headers: { Authorization: `Bearer ${token}`},
  })
}


export async function updateTask(params) {
  const token = getUserToken();
  return request('/server/api/task', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`},
    body: {
      ...params,
      method: 'put'
    }
  })
}

export async function deleteTask(params) {
  const token = getUserToken();
  return request('/server/api/task', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: {
      ...params,
      method: 'delete'
    }
  })
}

export async function addTask(params) {
  const token = getUserToken();
  return request('/server/api/task', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: {
      ...params,
      method: 'post'
    }
  })
}

export async function getTaskByUid(params) {
  const token = getUserToken();
  return request(`/server/api/task/${params.uid}/${params.pageNum}/${params.pageSize}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
