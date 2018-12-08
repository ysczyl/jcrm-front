import { chart } from '@/services/chart';
export default {
  namespace: 'chart',
  state: {
    status: undefined,
    list:[],
  },
  
  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(chart, payload);
      if (response) {
        yield put({
          type: 'chart',
          payload: response,
        });
      } else {
      }
    },

  },
  reducers: {
    chart(state,action){
      return{
        ...state,
        list:action.payload,
      }
    },
  },
};
