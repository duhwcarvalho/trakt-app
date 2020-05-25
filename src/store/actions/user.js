import api from '../../services/api';

import { handleModalMessage } from './modalMessage';

import { navigate } from '../../routes/rootNavigation';

export const userLogin = data => {
  return dispatch => {

    return dispatch({
      type: 'USER_LOGIN',
      payload: new Promise((resolve, reject) => {

        api.post('/login', { ...data }).then(res => {
          resolve(res.data);
        }).catch(error => {
          reject(error);
        });

      })
    })
    .then(_ => navigate('DrawerNavigator'))
    .catch(error => {
      if (error.status && error.status === 401) {
        const message = error.data.error;

        dispatch(handleModalMessage(message, false));
      }
    });
  };
};

export const userRegister = data => {
  return dispatch => {

    return dispatch({
      type: 'USER_REGISTER',
      payload: new Promise((resolve, reject) => {

        api.post('/users', { ...data }).then(res => {
          resolve(res.data);
        }).catch(error => {
          reject(error);
        });

      })
    })
    .then(_ => navigate('Login'))
    .catch(error => {
      if (error.status && error.status === 401) {
        const message = error.data.error;

        dispatch(handleModalMessage(message, false));
      }
    });
  };
};

export const userLogout = _ => {
  return dispatch => {

    dispatch({
      type: 'USER_LOGOUT'
    });

    navigate('Login')
  };
};
