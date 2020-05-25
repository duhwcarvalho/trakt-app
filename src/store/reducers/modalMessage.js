const initialState = {
  visible: false,
  message: '',
  success: true
};

export default modalMessage = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'HANDLE_MODAL_MESSAGE_OPEN':
      return {
        visible: true,
        message: payload.message,
        success: payload.success
      };

    case 'HANDLE_MODAL_MESSAGE_CLOSE':
      return initialState;

    default:
      return state;
  }
};
