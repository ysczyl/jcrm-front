import { updateUser, query as queryUsers, queryCurrent, addUser } from '@/services/user';
import { notification } from 'antd'
export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetch(params, { call, put }) {
      console.log('fetch:', params);
      const response = yield call(queryUsers, params);
      console.log(response);
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
          type: 'save',
          payload: values,
        }); 
      }
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      console.log(response);
      yield put({
        type: 'saveCurrentUser',
        payload: response.data,
      });
    },
    *updateUser(payload, { call, put }) {
      const response = yield call(updateUser, payload);
      console.log(response);
      if (response.code === 200) {
        yield put({
          type: 'saveCurrentUser',
          payload: payload,
        });
      }
    },
    *add(payload, { call, put }) {
      const response = yield call(addUser, payload.payload);
      console.log(response);
      if (response.code === 200) {
        notification.success({
          message: `创建成功`
        })
      }
    }
  },

  reducers: {
    save(state, action) {
      console.log('save', state, action)
      return {
        ...state,
        data: action.payload
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
