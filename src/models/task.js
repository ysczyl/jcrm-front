import { queryTask, getTaskDetails, addTask, updateTask, getTaskByUid, deleteTask } from '@/services/task'
export default {
  namespace: 'task',

  state: {
    list: [],
    pagination: {},
    task: {},
    data: {
      list: [],
      pagination: {},
    },
    query: {
      keyword: '',
      me: false,
      orderBy: 'start_time',
      pageNum: 1,
      pageSize: 10
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryTask, payload);
      if (response.code === 200) {
        yield put({
          type: 'queryList',
          payload: response.data,
        }); 
      }
    },
    *appendFetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *submit({ payload }, { call, put }) {
      let callback;
      if (payload.id) {
        callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
      } else {
        callback = addFakeList;
      }
      const response = yield call(callback, payload); // post
      yield put({
        type: 'queryList',
        payload: response,
      });
    },
  },

  reducers: {
    queryList(state, action) {
      console.log('reducers queryList', action.payload)
      return {
        ...state,
        list: action.payload.list,
        pagination: {
          current: action.payload.pageNum,
          pageSize: action.payload.pageSize,
          total: action.payload.total
        }
      };
    },
    appendList(state, action) {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
  },
};
