import request from '@/utils/request';
import { getUserToken } from '@/utils/authority'
//获取竞争对手列表信息可跟关键字查询
export async function getCompetitorsList(params) {
    const token = getUserToken();
    if (!params) {
        params = {
          pageSize: 10,
          currentPage: 1,
          keyword: ''  
        }
      }
      if (!params.pageSize) {
        params.pageSize = 10
      }
      if (!params.currentPage) {
        params.currentPage = 1
      }
      if (!params.keyword) {
        params.keyword = ''
      }
    return request(`/server/competitors?pageSize=${params.pageSize}&pageNum=${params.currentPage}&keyword=${params.keyword}`, {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取登录用户编辑的竞争对手列表信息
export async function getMyCompetitorsList() {
    const token = getUserToken();
    return request('/server/competitors/search', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//添加竞争对手
export async function insertCompetitors(params) {
    const token = getUserToken();
    return request(`/server/competitors`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: {
            ...params,
            method: 'post',
        },
    });
}

//为竞争对手附加标签
export async function addTags(params) {
    const token = getUserToken();
    return request(`/server/competitors/add`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: {
            ...params,
            method: 'post',
        },
    });
}

//修改竞争对手信息
export async function updateCompetitors(params) {
    const token = getUserToken();
    console.log("参数",params);
    return request(`/server/competitors`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: {
            ...params,
        },
    });
}

//删除竞争对手信息(修改状态)
export async function deleteCompetitors(params) {
    const token = getUserToken();
    return request(`/server/competitors/delete`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: {
            ...params,
        },
    });
}

//为竞争对手移除标签
export async function removeTags(params) {
    const token = getUserToken();
    return request(`/server/competitors`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: {
            ...params,
            method: 'delete',
        },
    });
}