import request from '../utils/request';
import { getUserToken } from '@/utils/authority'
export async function queryTask() {
  return request('/api/tasks');
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

