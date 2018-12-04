import { addss } from '@/services/consumer/consumer.js';
export default {
  namespace: 'consumer',
  state: {
    status: undefined,
  },
  effects: {
    *submit({ payload }, { call, put }) {
    	const response = yield call(addss, payload);
      console.log("uuu")
            console.log(response)
    	 if (response.code === 200) {
    	 	 console.log(response);
    	 	 console.log(payload);
      } else {
        response.status = false;
        console.log("no")
        // yield put({
        //   type: 'changeLoginStatus',
        //   payload: response,
        // });
      }
    },
  },
  reducers: {},
};
