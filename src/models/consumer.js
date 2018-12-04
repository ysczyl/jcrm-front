import { add } from '@/services/consumer/consumer';
export default {
  namespace: 'consumer',
  state: {
    status: undefined,
  },
  effects: {
    *submit({ payload }, { call, put }) {
    	const response = yield call(add, payload);
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
  },
  reducers: {},
};
