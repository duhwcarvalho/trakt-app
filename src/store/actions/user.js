import api from '../../services/api';

import { navigate } from '../../routes/rootNavigation';

export const userLogin = data => {
  return dispatch => {

    return dispatch({
      type: 'USER_LOGIN',
      payload: new Promise((resolve, reject) => {

        api.post('/login', { ...data }).then(res => {
          resolve({ ...res.data });
        }).catch(error => {
          reject();
        });

      })
    })
    .then(_ => navigate('DrawerNavigator'))
    .catch(error => console.log(error));

  };
};
