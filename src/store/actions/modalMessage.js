export const handleModalMessage = ( message, success ) => {
  return (dispatch, getState) => {

    if (getState().modalMessage.visible) return dispatch({
      type: 'HANDLE_MODAL_MESSAGE_CLOSE'
    });

    dispatch({
      type: 'HANDLE_MODAL_MESSAGE_OPEN',
      payload: {
        message,
        success
      }
    });
  }
};
