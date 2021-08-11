import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Step.scss'

const Step = ({ item, number }) => {
  const textRef = useRef()
  const [open, setOpen] = useState(false)

  const handleToggleOpen = () => setOpen(!open)

  useEffect(() => {
    if (open) {
      textRef.current.style.maxHeight = `
      ${textRef.current.scrollHeight}px
      `
    } else {
      textRef.current.style.maxHeight = ''
    }
  }, [open])

  return (
    <li className="step">
      <div className="step__container">
        <div className="step__number">
          <div className="step__number-border">
            {number < 10 ? `0${number}` : number}
          </div>
        </div>
        <div>
          <h3 className="step__title">{item.title}</h3>
          <h4 className="step__subtitle">{item.subtitle}</h4>
          <p className="step__text" ref={textRef}>
            {item.text}
          </p>
          <button
            type="button"
            className={classNames('step__button', { active: open })}
            onClick={handleToggleOpen}>
            Подробнее
          </button>
        </div>
      </div>
    </li>
  )
}

Step.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  number: PropTypes.number.isRequired,
}

export default Step
