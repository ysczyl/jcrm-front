import{ getTagsList,insertTags } from '@/services/tag';

export default {
    namespace: 'competitor',
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
  
      //添加标签信息(自定义标签内容)
      *insertTags({ payload }, { call, put }) {
          const response = yield call(add, payload);
          if (response.code === 200) {
              yield put({
                  type: 'saveTags',
                  payload: response,
              });
          } else {
              response.status = false;
          }
      },
  
    },
  
    reducers: {
      showTagsList(action){
          return{
              tagsList:action.payload,
          };
      },
  
      saveTags(state){
          return{
              ...state,
              action:response.payload,
          };
      },
  
    },
  
  };
  