import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Form = memo(({ className, children, onSubmit }) => {
  function handleSubmit(event) {
    onSubmit(event);

    event.preventDefault();
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
});

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  className: null,
  children: null,
};

export default Form;
