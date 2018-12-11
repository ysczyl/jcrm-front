import { getCompetitorsList,getMyCompetitorsList,insertCompetitors,addTags,updateCompetitors,deleteCompetitors,removeTags } from '@/services/competitor';
import { notification } from 'antd';

export default {
    namespace: 'competitors',
    state: {
      status: undefined,
      data: {
          list: [],
          pagination: {},
      },
    },
    effects: {
        //获取竞争对手列表信息可跟关键字查询
        *getCompetitorsList({ payload }, { call, put }) {
            console.log('xxx',payload)
            const response = yield call(getCompetitorsList, payload);
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
                    type: 'showCompetitorsList',
                    payload: values,
                });
            }
            if (response.code === 200) {
                const values = {
                    list: response.data.list,
                    pagination: {
                        current: response.data.pageNum,
                        pageSize: response.data.pageSize,
                        total: response.data.total
                    }
                }
                yield put({
                    type: 'showCompetitorsList',
                    payload: values,
                });
            }    
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
            const response = yield call(insertCompetitors, payload);
            if (response.code === 200) {
                notification.success({
                    message: '创建成功'
                })
            } 
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
            const response = yield call(deleteCompetitors, payload);
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
            data: action.payload,
        };
      },

      showMyCompetitorsList(state,action){
        return{
            ...state,
            myCompetitorsList:action.payload.data.list,
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
  