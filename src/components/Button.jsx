import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ outlined, color, children }) => (
  <button
    type="button"
    className={classNames('button', {
      'button--outlined': outlined,
      'button--yellow': color === 'yellow',
      'button--purple': color === 'purple',
    })}>
    {children}
  </button>
);

Button.propTypes = {
  outlined: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  outlined: false,
  color: null,
  children: null,
};

export default Button;
