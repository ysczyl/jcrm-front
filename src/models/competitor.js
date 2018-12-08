import { getCompetitorsList,getMyCompetitorsList,insertCompetitors,addTags,updateCompetitors,deleteCompetitors,removeTags } from '@/services/competitor';

export default {
    namespace: 'competitors',
    state: {
      status: undefined,
      competitorsList:[],
      myCompetitorsList:[],
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

        //获取登录用户编辑的竞争对手列表信息
        *getMyCompetitorsList({ payload }, { call, put }) {
            const response = yield call(getMyCompetitorsList, payload);
            if (response) {
                yield put({
                    type: 'showMyCompetitorsList',
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
            } else {}
        },

        //为竞争对手附加标签
        *addTags({ payload }, { call, put }) {
            const response = yield call(add, payload);
            if (response.code === 200) {
                yield put({
                    type: 'saveCompetitorsTags',
                    payload: response,
                });
            } else {}
        },

        //修改竞争对手信息
        *updateCompetitors({ payload }, { call, put }) {
            const response = yield call(add, payload);
            if (response.code === 200) {
                yield put({
                    type: 'editCompetitors',
                    payload: response,
                });
            } else {}
        },

        //删除竞争对手信息(修改状态)
        *deleteCompetitors({ payload }, { call, put }) {
            const response = yield call(add, payload);
            if (response.code === 200) {
                yield put({
                    type: 'removeCompetitors',
                    payload: response,
                });
            } else {}
        },

        //为竞争对手移除标签
        *removeTags({ payload }, { call, put }) {
            const response = yield call(add, payload);
            if (response.code === 200) {
                yield put({
                    type: 'removeTags',
                    payload: response,
                });
            } else {}
        },

    },

    reducers: {
      showCompetitorsList(state,action){
        return{
            ...state,
            competitorsList:action.payload.data.list,
        };
      },

      showMyCompetitorsList(state,action){
        return{
            ...state,
            myCompetitorsList:action.payload.data.list,
        };
      },

      saveCompetitors(state,action){
        return{
            ...state,
            action:response.payload,
        };
      },

      saveCompetitorsTags(state,action){
        return{
            ...state,
            action:response.payload,
        };
      },

      editCompetitors(state,action){
        return{
            ...state,
            action:response.payload,
        };
      },

      removeCompetitors(state,action){
        return{
            ...state,
            action:response.payload,
        };
      },

      removeTags(state,action){
        return{
            ...state,
            action:response.payload,
        };
      },
  
      
    },
  
  };
  