import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({
  id,
  label,
  type,
  placeholder,
  onChange,
  element,
  rows,
  errorMessage,
  isValid,
  ...other
}) => {
  const tag = !element ? (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      {...other}
    />
  ) : (
    <textarea rows={rows || 3} id={id} placeholder={placeholder} {...other} />
  )

  return (
    <section>
      <section className='input-error-wrapper'>
        {tag}
        {!isValid && <p className='input-error-message'>{errorMessage}</p>}
      </section>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
    </section>
  )
}

export default Input

Input.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.number,
  label: PropTypes.string,
  element: PropTypes.string,
  rows: PropTypes.string,
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool,
}
