import React, { useRef, useEffect } from 'react';
import { TextInput } from 'react-native';

import { useField } from '@unform/core';

function InputBase({name, setError, ...rest }) {

  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    setError && setError(error);
  }, [error])

  return (
    <TextInput
      ref={inputRef}
      defaultValue={defaultValue}
      autoCorrect={false}
      onFocus={clearError}
      {...rest}
    />
  );
}

export default InputBase;
