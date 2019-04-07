import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import styles from './button.css'

export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success'
}

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const propTypes = {
  type: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

const defaultProps = {
  disabled: false,
  type: 'submit',
  onClick: () => {},
  text: 'Button'
}

const BaseButton = ({ text, onClick, type, disabled, buttonType, buttonSize }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    //TODO: Put this into prop validations & default props instead
    // classnames=(
    //   styles.button,
    //   styles[buttonType || TYPES.PRIMARY],
    //   styles[buttonSize || SIZES.MEDIUM]
    //   )
  >
    {text}
  </button>
)

BaseButton.propTypes = propTypes
BaseButton.defaultProps = defaultProps

export default BaseButton

export const Primary = (props) => <BaseButton {...props} buttonType={TYPES.PRIMARY} />
export const Warning = (props) => <BaseButton {...props} buttonType={TYPES.WARNING} />
export const Danger = (props) => <BaseButton {...props} buttonType={TYPES.DANGER} />
export const Success = (props) => <BaseButton {...props} buttonType={TYPES.SUCCESS} />
