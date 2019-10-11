import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './styles/Checkbox.styles.css';

const Checkbox = memo(props => {
  const { title, isChecked, onChange, className } = props;

  function changeCheckboxValue() {
    onChange(!isChecked);
  }

  return (
    <div className={className}>
      <label className="checkbox">
        <div className="checkbox__title">{title}</div>
        <input
          className="checkbox__input"
          onChange={changeCheckboxValue}
          type="checkbox" checked={isChecked}
        />
        <span className="checkbox__mark" />
      </label>
    </div>
  );
});

Checkbox.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  title: '',
  className: null,
};

export default Checkbox;