import request from '@/utils/request';
import { getUserToken } from '@/utils/authority'
export async function adds(params) {
  const token = getUserToken()
  return request('/server/api/contacts', {
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
  return request('/server/api/contacts/detailed', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// 联系人列表
export async function contactsList(params) {
  const token = getUserToken();
  console.log(params+".aaaaaaaaaa....")
  if(!params){
    params = ""
  }
  // cid为跳转页面时传入的客户id
  return request(`/server/api/contacts?cid=11&keyword=${params}`, {
    headers: { Authorization: `Bearer ${token}`, method: 'GET' },
  });
}

export async function contactsDelete(params) {
  const token = getUserToken();
  return request('/server/api/contacts/delete?cid='+params.cid, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, },
  });
}

export async function contactsSearch(params) {
  const token = getUserToken();
  return request('/server/api/contacts/detailed?cid='+params.cid, {
    headers: {   Authorization: `Bearer ${token}` ,method: 'GET' },
  });
}

export async function add(params) {
  const token = getUserToken();
  return request('/server/api/contacts', {
    method: 'POST',
    headers: {   Authorization: `Bearer ${token}` },
      body: {
        ...params,
        method: 'post',
      },
  });
}

// 编辑联系人
export async function update(params) {
  console.log(params,"........112")
  const token = getUserToken();
  return request('/server/api/contacts', {
    method: 'PUT',
    headers: {   Authorization: `Bearer ${token}` },
      body: {
        ...params,
      },
  });
}
