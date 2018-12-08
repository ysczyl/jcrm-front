import request from '@/utils/request';

export async function chart() {
  const token = sessionStorage.getItem('token');
  return request('/server/api/chart/sumMoney', {
    headers: { Authorization: `Bearer ${token}` },
  });
}
