import { ActionType } from 'redux-promise-middleware';

const initialState = {
  loading: false,
  data: {},
  token: ''
};

export default user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `USER_LOGIN_${ActionType.Pending}`:
      return {
        ...state,
        loading: true,
      };

    case `USER_LOGIN_${ActionType.Fulfilled}`:
      return {
        loading: false,
        data: payload.user,
        token: payload.token,
      };

    case `USER_LOGIN_${ActionType.Rejected}`:
      return initialState;

    case `USER_REGISTER_${ActionType.Pending}`:
      return {
        ...state,
        loading: true,
      };

    case `USER_REGISTER_${ActionType.Rejected}`:
      return initialState;

    case `USER_LOGOUT`:
      return initialState;

    default:
      return state;
  }
};
