import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  const token = sessionStorage.getItem('token');
  return request('/server/api/user/currentUser', { headers: { Authorization: `Bearer ${token}` } });
}
