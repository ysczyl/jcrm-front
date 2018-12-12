import { add,update,customerList,customerSearch,customerDelete } from '@/services/consumer';
import { bindEnterprise, adds } from '@/services/enterprise';
import { notification } from 'antd'
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
// 添加客户
    *submit({ payload }, { call, put }) {
      console.log(payload)
      const response = yield call(add, payload);
      if (response) {
        yield put({
          type: 'customerList',
          // payload: payload,
        });
      } else {
      }
    },

// 编辑客户
    *update({ payload }, { call, put }) {
      console.log(payload,"123123123")
      const response = yield call(update, payload);
      if (response) {
        yield put({
          type: 'customerList',
        });
      } else {
      }
    },


//客户列表
    *customerList({ payload }, { call, put }) {
      console.log(payload+".......")
      const response = yield call(customerList, payload);
      console.log(response)
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
        console.log(payload)
      const response = yield call(customerDelete, payload);
      if (response) {
        notification.success({
          message: '删除成功'
        })
        yield put({
          type: 'customerList',
          // payload: response,
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
