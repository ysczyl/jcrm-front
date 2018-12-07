import { fakeRegister } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';
import { routerRedux } from 'dva/router';
import { notification } from 'antd';
import { getPageQuery } from '@/utils/utils';
export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(fakeRegister, payload);
      if (payload.code < 0) {
        notification.info({
          message: `${response.msg}`,
          description: '',
        });
      } else {
        const token = response.data;
        const user = JSON.parse(
          window.atob(token.substring(token.indexOf('.') + 1, token.lastIndexOf('.')))
        );
        console.log(`user:${user}`);
        user.status = true;
        console.log(user);
        sessionStorage.setItem('token', token);
        yield put({
          type: 'login/changeLoginStatus',
          payload: user,
        });
        yield put({
          type: 'registerHandle',
          payload: user,
        });
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
      // yield put({
      //   type: 'registerHandle',
      //   payload: response,
      // });
    },
  },

  reducers: {
    registerHandle(state, { payload }) {
      reloadAuthorized();
      return {
        ...state,
        status: payload.status,
      };
    },
  },
};
