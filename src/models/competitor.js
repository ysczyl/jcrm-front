import { getCompetitorsList,getMineCompetitorsList,insertCompetitors,addTags,updateCompetitors,deleteCompetitors,deleteTags } from '@/services/competitor';

export default {
  namespace: 'competitor',
  state: {
    status: undefined,
    competitorsList:[],
    mineCompetitorsList:[],
   
  },
  effects: {
    //获取竞争对手列表信息可跟关键字查询
    *getCompetitorsList({ payload }, { call, put }) {
        const response = yield call(getCompetitorsList, payload);
        if (response) {
            yield put({
                type: 'showCompetitorsList',
                payload: response,
            });
        }else{}
    },

    //获取竞争对手列表信息(登录用户本人编辑的)
    *getMineCompetitorsList({ payload }, { call, put }) {
        const response = yield call(getMineCompetitorsList, payload);
        if (response) {
            yield put({
                type: 'showMineCompetitorsList',
                payload: response,
            });
        }else{}
    },

    //添加竞争对手
    *insertCompetitors({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'saveCompetitors',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //为竞争对手添加标签
    *addTags({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'saveCompetitorsTags',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //竞争对手所有者修改竞争对手信息
    *updateCompetitors({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'editCompetitors',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //竞争对手所有者删除竞争对手信息(修改状态)
    *deleteCompetitors({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'deleteCompetitors',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

    //为竞争对手移除标签
    *deleteTags({ payload }, { call, put }) {
        const response = yield call(add, payload);
        if (response.code === 200) {
            yield put({
                type: 'deleteTags',
                payload: response,
            });
        } else {
            response.status = false;
        }
    },

  },

  reducers: {
    showCompetitorsList(action){
        return{
            competitorsList:action.payload,
        };
    },
    
    showMineCompetitorsList(action){
        return{
            mineCompetitorsList:action.payload,
        };
    },

    saveCompetitors(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    saveCompetitorsTags(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    editCompetitors(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    deleteCompetitors(state){
        return{
            ...state,
            action:response.payload,
        };
    },

    deleteTags(state){
        return{
            ...state,
            action:response.payload,
        };
    },

  },

};
