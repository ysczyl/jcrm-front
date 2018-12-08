import { getTagsList,insertTags } from '@/services/tag';

export default {
    namespace: 'tag',
    state: {
      status: undefined,
      tagsList:[],
    },
    effects: {
        //获取标签列表信息
        *getTagsList({ payload }, { call, put }) {
            const response = yield call(getTagsList, payload);
            if (response) {
                yield put({
                    type: 'showTagsList',
                    payload: response,
                });
            }else{}
        },

        //自定义标签信息
        *insertTags({ payload }, { call, put }) {
            const response = yield call(add, payload);
            if (response.code === 200) {
                yield put({
                    type: 'saveTags',
                    payload: response,
                });
            } else {}
        }, 

    },

    reducers: {
      showTagsList(state,action){
        return{
            ...state,
            tagsList:action.payload.data.list,
        };
      },

      saveTags(state,action){
        return{
            ...state,
            action:response.payload,
        };
      },
      
    },
  
  };
  