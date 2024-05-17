import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className, disabled, style }) => {
  const buttonClass = `btn ${className || 'btn-primary'}`;

  const buttonStyle = {
   padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    ...style,
  };

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string, 
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  className: 'btn-primary',
  disabled: false,
  style: {},
};

export default Button;
