import { add,customerList,customerSearch } from '@/services/consumer';
import { bindEnterprise, adds } from '@/services/enterprise';
export default {
  namespace: 'consumer',
  state: {
    status: undefined,
    list:[],
    customerSearch:[],
  },
  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(add, payload);
      console.log('uuu');
      console.log(response);
      if (response.code === 200) {
        console.log(response);
        console.log(payload);
      } else {
        response.status = false;
        // yield put({
        //   type: 'changeLoginStatus',
        //   payload: response,
        // });
      }
    },


//客户列表
    *customerList({ payload }, { call, put }) {
      const response = yield call(customerList, payload);
      if (response) {
        yield put({
          type: 'show',
          payload: response,
        });
      }else{
      }
    },

    //客户详细信息
      *customerSearch({ payload }, { call, put }) {
      const response = yield call(customerSearch, payload);
      customerSearch=response;
        yield put({
          type: 'showSearch',
          payload: response,
        });
    },

  },
  reducers: {
    show(state,action){
      return{
        list:action.payload.data.list,
      };
    },

    showSearch(state,action){
      return{
        customerSearch:action.payload,
      };
    },
  },
};
