import React from 'react';

const Input = ({ value, onInput }) => {
  return (
    <input
      className='input'
      onInput={onInput}
      type='text'
      value={value}
      placeholder='#......'
    />
  );
};

export default Input;
