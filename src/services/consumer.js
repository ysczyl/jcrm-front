import request from '@/utils/request';

export async function adds(params) {
  const token = sessionStorage.getItem('token');
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
  const token = sessionStorage.getItem('token');
  return request('/server/api/consumer/detailed', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function customerList(params) {
  const token = sessionStorage.getItem('token');
  return request('/server/api/consumer/listOfficial', {
    headers: { Authorization: `Bearer ${token}`, method: 'GET' },
  });
}

export async function customerSearch(params) {
  const token = sessionStorage.getItem('token');
  return request('/server/api/consumer/detailed', {
    headers: {   Authorization: `Bearer ${token}` ,method: 'GET' },
      body: {
        "cid":11
      },
  });
}


export async function add(params) {
  const token = sessionStorage.getItem('token');
  return request('/server/api/consumer', {
    method: 'POST',
    headers: {   Authorization: `Bearer ${token}` },
      body: {
        ...params,
        method: 'post',
      },
  });
}
