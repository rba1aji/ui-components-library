import React from 'react';
import PropTypes from 'prop-types';
import './Button.components.css';

export default function Button(props) {

    const { primary, backgroundColor, size, label } = props;

    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return (
        <button
            type="button"
            className={`storybook-button storybook-button--${size} ${mode}`}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};
