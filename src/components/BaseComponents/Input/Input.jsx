import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Input = memo(props => {
  const { className, onChangeValue, value, type, placeholder } = props;

  function onChange(event) {
    const { value } = event.target;

    onChangeValue(value);
  }

  return (
    <input placeholder={placeholder} type={type} className={className} onChange={onChange} value={value}/>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  onChangeValue: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: null,
  onChangeValue: null,
  placeholder: '',
};

export default Input;
