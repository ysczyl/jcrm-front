import request from '@/utils/request';

export default async function bindEnterprise(params) {
  const token = sessionStorage.getItem('token')
  return request(`/api/enterprise`, {
      method: 'POST',
      headers: {'Authorization': `Bearer ${token}`},
      body: {
        ...params,
        method: 'post',
      }
  });
}

export default async function updateEnterprise(params) {
    const token = sessionStorage.getItem('token')
    return request(`/api/enterprise`, {
      method: 'POST',
      body: {
          ...params,
          method: 'put',
          headers: {'Authorization': `Bearer ${token}`}
      }
  });
}
export default async function deleteEnterprise(params) {
    const token = sessionStorage.getItem('token')
    return request(`/api/enterprise`, {
      method: 'POST',
      body: {
          ...params,
          method: 'delete',
          headers: {'Authorization': `Bearer ${token}`}
      }
  });
}
