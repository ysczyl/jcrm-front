import request from '@/utils/request';

//获取标签列表信息
export async function getTagsList() {
    const token = sessionStorage.getItem('token');
    return request('/server/tag', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//自定义标签信息
export async function insertTags(params) {
    const token = sessionStorage.getItem('token');
    return request(`/server/tag`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: {
            ...params,
            method: 'post',
        },
    });
}