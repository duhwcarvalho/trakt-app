import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { handleModalMessage } from '../../store/actions/modalMessage';

import { Modal } from 'react-native';

import {
  ContainerModalMessage,
  ContentModalMessage,
  Message
} from './styles';

function ModalMessage() {

  const dispatch = useDispatch();
  const stateModalMessage = useSelector(state => state.modalMessage, shallowEqual)
  const { visible, message, success } = stateModalMessage;

  function handleClose() {
    dispatch(handleModalMessage())
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <ContainerModalMessage onPress={handleClose}>
        <ContentModalMessage success={success}>
          <Message>{message}</Message>
        </ContentModalMessage>
      </ContainerModalMessage>
    </Modal>
  )
};

export default ModalMessage;
