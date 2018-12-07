import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { fakeAccountLogin, getFakeCaptcha } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response.code === 200) {
        const token = response.data;
        console.log(token);
        const user = JSON.parse(
          window.atob(token.substring(token.indexOf('.') + 1, token.lastIndexOf('.')))
        );
        console.log(`user:${user}`);
        user.status = true;
        console.log(user);
        sessionStorage.setItem('token', token);
        yield put({
          type: 'changeLoginStatus',
          payload: user,
        });
      } else {
        response.status = false;
        yield put({
          type: 'changeLoginStatus',
          payload: response,
        });
      }
      // Login successfully
      if (response.code === 200) {
        reloadAuthorized();
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
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { put }) {
      sessionStorage.clear();
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          authority: 'guest',
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      console.log(payload);
      setAuthority(payload.authority);

      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};
