import { getOpportunityList,getSourceList,getStageList,getReasonList,getOpportunitySourceList,getStatusList,getTypeList,getRecordList,getChartList,insertOpportunity,insertSource,insertApplication,updateOpportunity,deleteOpportunity,updateOpportunityPartial,updateSource,agreeApplication,rejectApplication,customerList } from '@/services/opportunity';

export default {
  namespace: 'opportunity',
  state: {
    delete:true,
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
    list:[],
    data: {
        list: [],
        pagination: {},
      },
  },
  effects: {
    //获取商业机会列表信息可跟关键字查询
    *getOpportunityList({ payload }, { call, put }) {
        const response = yield call(getOpportunityList, payload);
        console.log(response)
        if (response.code == 200) {
            const values = {
                list: response.data.list,
                pagination: {
                  current: response.data.pageNum,
                  pageSize: response.data.pageSize,
                  total: response.data.total
                }
              }
            yield put({
                type: 'showOpportunityList',
                payload: values,
            });
        }
        if(response.code === 403) {
            const values = {
                list: [],
                pagination: {
                    current: 1,
                    pageSize: 10,
                    total: 0
                }
            }
            yield put({
                type: 'showOpportunityList',
                payload: values,
            });
        }
        else{}
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
        const response = yield call(insertOpportunity, payload);
        console.log("ysc")
        if (response.code === 200) {
            yield put({
                type: 'saveOpportunity',
                payload: response,
            });
        } else {
          
        }
    },

    //添加市场来源
    *insertSource({ payload }, { call, put }) {
        const response = yield call(insertSource, payload);
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
        const response = yield call(updateOpportunity, payload);
        if (response.code === 200) {
            yield put({
                type: 'editOpportunity',//********************************************************************** */
                payload: response,
            });
        } else {
           
        }
    },

    //商业机会所有者删除商业机会信息(修改状态)
    *deleteOpportunity({ payload }, { call, put }) {
        const response = yield call(deleteOpportunity, payload);
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
        const response = yield call(updateOpportunityPartial, payload);
        if (response.code === 200) {
            yield put({
                type: 'editOpportunityPartial',
                payload: response,
            });
        } 
        else{
            yield put({
                type: 'no',
            });
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
        //客户列表
        *customerList({ payload }, { call, put }) {
            const response = yield call(customerList, payload);
            console.log(response)
            if (response) {
              yield put({
                type: 'shows',
                payload: response,
              });
            }else{
            }
          },

  },

  reducers: {
    showOpportunityList(state,action){
        return{
            ...state,
            data:action.payload,
        };
    },

    showSourceList(state,action){
        return{
            ...state,
            sourceList:action.payload.data.list,
        };
    },

    showStageList(state,action){
        return{
            ...state,
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

    saveOpportunity(state,action){
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
        };
    },

    removeOpportunity(state){
        return{
            ...state,
        };
    },

    editOpportunityPartial(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    no(state,action){
        return{
            ...state,
            delete:false,
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
    shows(state,action){
        console.log(state)
        return{
            ...state,
          list:action.payload.data.list,
        };
      },

  },

};
