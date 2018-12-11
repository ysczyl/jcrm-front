import request from '@/utils/request';
import { getUserToken } from '@/utils/authority'
//获取商业机会列表信息可跟关键字查询
export async function getOpportunityList() {
    const token = getUserToken();
    return request('/server/opportunity/searchOpp', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取商业机会市场来源列表信息(用于新建商业机会)
export async function getSourceList() {
    const token = getUserToken();
    return request('/server/opportunity/source', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取商业机会阶段列表信息(用于新建商业机会)
export async function getStageList() {
    const token = getUserToken();
    return request('/server/opportunity/stage', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取商业机会丢失原因列表信息(用于修改商业机会,当商业机会阶段为Closed Lost时选择丢失原因)
export async function getReasonList() {
    const token = getUserToken();
    return request('/server/opportunity/reason', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取商业机会市场来源列表信息可跟关键字查询
export async function getOpportunitySourceList() {
    const token = getUserToken();
    return request('/server/opportunity/searchSource', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取商业机会市场来源状态列表(用于新建市场来源)
export async function getStatusList() {
    const token = getUserToken();
    return request('/server/opportunity/status', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取商业机会市场来源类别列表(用于新建市场来源)
export async function getTypeList() {
    const token = getUserToken();
    return request('/server/opportunity/type', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//获取商业机会阶段为Closed Won的列表信息可跟关键字查询
export async function getRecordList() {
    const token = getUserToken();
    return request('/server/opportunity/searchRecord', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//根据输入的时间段和商业机会ID获取该机会的价值变化列表信息
export async function getChartList() {
    const token = getUserToken();
    return request('/server/opportunity/chart', {
        headers: { 
            Authorization: `Bearer ${token}`, 
            method: 'GET' 
        },
    });
}

//添加商业机会(只有上级有权限)
export async function insertOpportunity(params) {
    const token = getUserToken();
    return request(`/server/opportunity`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: {
            ...params,
        },
    });
}

//添加市场来源
export async function insertSource(params) {
    const token = getUserToken();
    return request(`/server/opportunity/source`, {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: {
            ...params,
            method: 'post',
        },
    });
}

//商业机会跟进者向所有者发出修改申请
export async function insertApplication(params) {
    const token = getUserToken();
    return request(`/server/opportunity/application`, {
        method: 'POST',
        body: {
            ...params,
            method: 'post',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//商业机会所有者修改商业机会信息
export async function updateOpportunity(params) {
    const token = getUserToken();
    return request(`/server/opportunity`, {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//商业机会所有者删除商业机会信息(修改状态)
export async function deleteOpportunity(params) {
    const token = getUserToken();
    return request(`/server/opportunity/delete`, {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//商业机会跟进者修改商业机会信息
export async function updateOpportunityPartial(params) {
    const token = getUserToken();
    return request(`/server/opportunity/partial`, {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//修改市场活动来源信息
export async function updateSource(params) {
    const token = getUserToken();
    return request(`/server/opportunity/source`, {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//商业机会所有者同意跟进者的修改申请
export async function agreeApplication(params) {
    const token = getUserToken();
    return request(`/server/opportunity/agree`, {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}

//商业机会所有者拒绝跟进者的修改申请
export async function rejectApplication(params) {
    const token = getUserToken();
    return request(`/server/opportunity/reject`, {
        method: 'POST',
        body: {
            ...params,
            method: 'update',
            headers: { Authorization: `Bearer ${token}` },
        },
    });
}



export async function customerList(params) {
    const token = getUserToken();
    return request('/server/api/consumer/listOfficial', {
      headers: { Authorization: `Bearer ${token}`, method: 'GET' },
    });
  }

