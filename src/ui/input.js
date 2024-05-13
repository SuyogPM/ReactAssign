import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, className, style, onChange, value }) => {
    const inputStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        ...style,
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className || 'form-control'}
            style={inputStyle}
            value={value}
            onChange={onChange} // Use the onChange prop directly
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.any,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    placeholder: '',
    className: 'form-control',
    style: {},
    value: '',
    onChange: () => {},
};

export default Input;
