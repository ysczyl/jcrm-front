import { addss } from '@/services/consumer';
import { bindEnterprise, adds } from '@/services/enterprise';
export default {
  namespace: 'consumer',
  state: {
    status: undefined,
  },
  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(adds, payload);
      console.log('uuu');
      console.log(response);
      if (response.code === 200) {
        console.log(response);
        console.log(payload);
      } else {
        response.status = false;
        console.log('no');
        // yield put({
        //   type: 'changeLoginStatus',
        //   payload: response,
        // });
      }
    },
  },
  reducers: {},
};
