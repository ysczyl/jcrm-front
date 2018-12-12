import { add,update,contactsList,contactsSearch,contactsDelete } from '@/services/contacts';
import { bindEnterprise, adds } from '@/services/enterprise';
import { notification } from 'antd'
export default {
  namespace: 'contacts',
  state: {
    status: undefined,
    list:[],
    contactsSearch:[],
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
          type: 'contactsList',
          // payload: payload,
        });
      } else {
      }
    },

// 编辑客户
    *update({ payload }, { call, put }) {
      const response = yield call(update, payload);
      if (response) {
        yield put({
          type: 'contactsList',
        });
      } else {
      }
    },


//联系人列表
    *contactsList({ payload }, { call, put }) {
      const response = yield call(contactsList, payload);
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
      *contactsSearch({ payload }, { call, put }) {
      const response = yield call(contactsSearch, payload);
      if (response) {
        yield put({
          type: 'showSearch',
          payload: values,
        });
      }else{
        
      }
    },

//删除客户
      *contactsDelete({ payload }, { call, put }) {
        console.log(payload)
      const response = yield call(contactsDelete, payload);
      if (response) {
        notification.success({
          message: '删除成功'
        })
        yield put({
          type: 'contactsList',
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
        contactsSearch:action.payload.data,
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
