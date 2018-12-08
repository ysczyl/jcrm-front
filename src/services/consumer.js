import request from '@/utils/request';
import { getUserToken } from '@/utils/authority'
export async function adds(params) {
  const token = getUserToken()
  console.log('111111');
  return request('/server/api/consumer', {
    headers: { Authorization: `Bearer ${token}` },
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function seach() {
  const token = getUserToken();
  return request('/server/api/consumer/detailed', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function customerList(params) {
  const token = getUserToken();
  return request('/server/api/consumer/listOfficial', {
    headers: { Authorization: `Bearer ${token}`, method: 'GET' },
  });
}

export async function customerDelete(params) {
  const token = sessionStorage.getItem('token');
  return request('/server/api/consumer/delete?cid='+params.cid, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, },
  });
}

export async function customerSearch(params) {
<<<<<<< HEAD
  const token = getUserToken();
  return request('/server/api/consumer/detailed', {
=======
  const token = sessionStorage.getItem('token');
  return request('/server/api/consumer/detailed?cid='+params.cid, {
>>>>>>> 3061924f39edca275df61c442643e5b16c21413d
    headers: {   Authorization: `Bearer ${token}` ,method: 'GET' },
  });
}


export async function add(params) {
  const token = getUserToken();
  return request('/server/api/consumer', {
    method: 'POST',
    headers: {   Authorization: `Bearer ${token}` },
      body: {
        ...params,
        method: 'post',
      },
  });
}
