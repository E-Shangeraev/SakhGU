/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

const Button = ({
  outlined,
  color,
  type,
  disabled,
  children,
  onClick,
  className,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={classNames('button', className, {
      'button--outlined': outlined,
      'button--yellow': color === 'yellow',
      'button--purple': color === 'purple',
      'button--white': color === 'white',
      'button--white-outlined': color === 'white-outlined',
    })}>
    {children}
  </button>
)

Button.propTypes = {
  outlined: PropTypes.bool,
  color: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

Button.defaultProps = {
  outlined: false,
  color: null,
  type: 'button',
  disabled: false,
  children: null,
  onClick: () => {},
  className: null,
}

export default Button
