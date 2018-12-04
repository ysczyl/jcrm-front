import request from '@/utils/request';

export async function add(params) {
  const token = sessionStorage.getItem('token');
   return request('/server/api/consumer', {
   	headers: { Authorization: `Bearer ${token}`,
    method: 'POST',
    body: {
      ...params,
    },
}
  });

}

export async function adds() {
  const token = sessionStorage.getItem('token');
  return request('/server/api/user/currentUser', { headers: { Authorization: `Bearer ${token}` } });
}
