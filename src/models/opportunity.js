import { getOpportunityList,getSourceList,getStageList,getReasonList,getOpportunitySourceList,getStatusList,getTypeList,getRecordList,getChartList,insertOpportunity,insertSource,insertApplication,updateOpportunity,deleteOpportunity,updateOpportunityPartial,updateSource,agreeApplication,rejectApplication } from '@/services/opportunity';

export default {
  namespace: 'opportunity',
  state: {
    status: undefined,
    opportunityList:[],
    sourceList:[],
    stageList:[],
    reasonList:[],
    opportunitySourceList:[],
    statusList:[],
    typeList:[],
    recordList:[],
    chartList:[],
  },
  effects: {
    //获取商业机会列表信息可跟关键字查询
    *getOpportunityList({ payload }, { call, put }) {
        const response = yield call(getOpportunityList, payload);
        if (response) {
            yield put({
                type: 'showOpportunityList',
                payload: response,
            });
        }else{}
    },

    //获取商业机会市场来源列表信息(用于新建商业机会)
    *getSourceList({ payload }, { call, put }) {
        const response = yield call(getSourceList, payload);
        if (response) {
            yield put({
                type: 'showSourceList',
                payload: response,
            });
        }else{}
    },

    //获取商业机会阶段列表信息(用于新建商业机会)
    *getStageList({ payload }, { call, put }) {
        const response = yield call(getStageList, payload);
        if (response) {
            yield put({
                type: 'showStageList',
                payload: response,
            });
        }else{}
    },

    //获取商业机会丢失原因列表信息(用于修改商业机会,当商业机会阶段为Closed Lost时选择丢失原因)
    *getReasonList({ payload }, { call, put }) {
        const response = yield call(getReasonList, payload);
        if (response) {
            yield put({
                type: 'showReasonList',
                payload: response,
            });
        }else{}
    },

    //获取商业机会市场来源列表信息可跟关键字查询
    *getOpportunitySourceList({ payload }, { call, put }) {
        const response = yield call(getOpportunitySourceList, payload);
        if (response) {
            yield put({
                type: 'showOpportunitySourceList',
                payload: response,
            });
        }else{}
    },

    //获取商业机会市场来源状态列表(用于新建市场来源)
    *getStatusList({ payload }, { call, put }) {
        const response = yield call(getStatusList, payload);
        if (response) {
            yield put({
                type: 'showStatusList',
                payload: response,
            });
        }else{}
    },

    //获取商业机会市场来源类别列表(用于新建市场来源)
    *getTypeList({ payload }, { call, put }) {
        const response = yield call(getTypeList, payload);
        if (response) {
            yield put({
                type: 'showTypeList',
                payload: response,
            });
        }else{}
    },

    //获取商业机会阶段为Closed Won的列表信息可跟关键字查询
    *getRecordList({ payload }, { call, put }) {
        const response = yield call(getRecordList, payload);
        if (response) {
            yield put({
                type: 'showRecordList',
                payload: response,
            });
        }else{}
    },

    //获取商业机会阶段为Closed Won的列表信息可跟关键字查询
    *getRecordList({ payload }, { call, put }) {
        const response = yield call(getRecordList, payload);
        if (response) {
            yield put({
                type: 'showRecordList',
                payload: response,
            });
        }else{}
    },

    //根据输入的时间段和商业机会ID获取该机会的价值变化列表信息
    *getChartList({ payload }, { call, put }) {
        const response = yield call(getChartList, payload);
        if (response) {
            yield put({
                type: 'showChartList',
                payload: response,
            });
        }else{}
    },

    //添加商业机会(只有上级有权限)
    *insertOpportunity({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'saveOpportunity',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //添加市场来源
    *insertSource({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'saveSource',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //商业机会跟进者向所有者发出修改申请
    *insertApplication({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'saveApplication',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //商业机会所有者修改商业机会信息
    *updateOpportunity({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'editOpportunity',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //商业机会所有者删除商业机会信息(修改状态)
    *deleteOpportunity({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'removeOpportunity',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //商业机会跟进者修改商业机会信息
    *updateOpportunityPartial({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'editOpportunityPartial',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //修改市场活动来源信息
    *updateSource({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'editSource',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //商业机会所有者同意跟进者的修改申请
    *agreeApplication({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'agree',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //商业机会所有者拒绝跟进者的修改申请
    *rejectApplication({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'reject',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

  },

  reducers: {
    showOpportunityList(action){
        return{
            opportunityList:action.payload.data.list,
        };
    },

    showSourceList(action){
        return{
            sourceList:action.payload.data.list,
        };
    },

    showStageList(action){
        return{
            stageList:action.payload.data.list,
        };
    },

    showReasonList(action){
        return{
            reasonList:action.payload.data.list,
        };
    },

    showOpportunitySourceList(action){
        return{
            opportunitySourceList:action.payload.data.list,
        }
    },

    showStatusList(action){
        return{
            statusList:action.payload.data.list,
        };
    },

    showTypeList(action){
        return{
            typeList:action.payload.data.list,
        };
    },

    showRecordList(action){
        return{
            recordList:action.payload.data.list,
        };
    },

    showChartList(action){
        return{
            chartList:action.payload.data.list,
        };
    },

    saveOpportunity(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    saveSource(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    saveApplication(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    editOpportunity(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    removeOpportunity(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    editOpportunityPartial(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    editSource(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    agree(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    reject(state){
        return{
            ...state,
            action:response.payload,
        };
    },

  },

};
