import request from '@/utils/request';

//获取竞争对手列表信息可跟关键字查询
export async function getCompetitorsList() {
    const token = sessionStorage.getItem('token');
    return request('/server/competitors', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取竞争对手列表信息(登录用户本人编辑的)
export async function getMineCompetitorsList() {
    const token = sessionStorage.getItem('token');
    return request('/server/competitors/search', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//添加竞争对手
export async function insertCompetitors(params) {
    const token = sessionStorage.getItem('token');
    return request(`/server/competitors`, {
        method: 'POST',
        body: {
            ...params,
            method: 'post',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//为竞争对手添加标签
export async function addTags(params) {
    const token = sessionStorage.getItem('token');
    return request(`/server/competitors/add`, {
        method: 'POST',
        body: {
            ...params,
            method: 'post',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//竞争对手所有者修改竞争对手信息
export async function updateCompetitors(params) {
    const token = sessionStorage.getItem('token');
    return request(`/server/competitors`, {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//竞争对手所有者删除竞争对手信息(修改状态)
export async function deleteCompetitors(params) {
    const token = sessionStorage.getItem('token');
    return request(`/server/competitors/delete`, {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//为竞争对手移除标签
export async function deleteTags(params) {
    const token = sessionStorage.getItem('token');
    return request(`/server/competitors`, {
        method: 'POST',
        body: {
            ...params,
            method: 'delete',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}