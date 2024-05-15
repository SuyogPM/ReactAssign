import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, className,name, style, onChange, value }) => {
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
            name = {name}
            value={value}
            onChange={onChange} 
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    name : PropTypes.any,
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
