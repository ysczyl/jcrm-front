import request from '@/utils/request';
import { getUserToken } from '@/utils/authority';
export async function query() {
  return request('/api/users');
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
