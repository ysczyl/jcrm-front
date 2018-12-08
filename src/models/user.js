import { updateUser, query as queryUsers, queryCurrent } from '@/services/user';
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
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      console.log(response);
      yield put({
        type: 'save',
        payload: response.data,
      });
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
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
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
