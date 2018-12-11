import { add,customerList,customerSearch,customerDelete } from '@/services/consumer';
import { bindEnterprise, adds } from '@/services/enterprise';
export default {
  namespace: 'consumer',
  state: {
    status: undefined,
    list:[],
    customerSearch:[],
    data: {
      list: [],
      pagination: {},
    },
  },
  
  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(add, payload);
      if (response) {
        yield put({
          type: 'save',
          payload: response,
        });
      } else {
      }
    },


//客户列表
    *customerList({ payload }, { call, put }) {
      const response = yield call(customerList, payload);
      if (response) {
        const values = {
          list: response.data.list,
          pagination: {
            current: response.data.pageNum,
            pageSize: response.data.pageSize,
            total: response.data.total
          }
        }
        yield put({
          type: 'save',
          payload: values,
        });
      }else{
      }
    },

    //客户详细信息
      *customerSearch({ payload }, { call, put }) {
      const response = yield call(customerSearch, payload);
      if (response) {
        
        yield put({
          type: 'showSearch',
          payload: values,
        });
      }else{
        
      }
    },

    //删除客户
      *customerDelete({ payload }, { call, put }) {
      const response = yield call(customerDelete, payload);
      if (response) {
        yield put({
          type: 'delete',
          payload: response,
        });
      }else{
        console.log("ysc")
      }
    },

  },
  reducers: {
    show(state,action){
      return{
        list:action.payload.data.list,
      };
    },

    showSearch(state,action){
      console.log(action.payload.data)
      return{
        customerSearch:action.payload.data,
      };
    },
    save(state,action){
      console.log('save', state, action)
      return {
        ...state,
        data: action.payload
      };
    },
    delete(state,action){
      return{
        ...state,
      }
    },
    
  },
};
