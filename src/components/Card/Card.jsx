import React from 'react'
import PropTypes from 'prop-types'
import { startCase, kebabCase } from 'lodash'
import './Card.scss'

export const Card = ({ type, duration, severity }) => {
  const deleteItem = () => {
    //TODO Implemen delete function
  }

  return (
    <div className={`card card__${kebabCase(type)}`}>
      <i className="material-icons close-icon" onClick={deleteItem}>
        close
      </i>
      <h3 className="card--type">{startCase(type)}</h3>
      <h4 className="card--duration">{`${duration} hr${
        duration > 1 ? 's' : ''
      }`}</h4>
      <h3 className="card--severity">{startCase(severity)}</h3>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.oneOf(['feature', 'bugFix', 'update', 'research', 'content'])
    .isRequired,
  duration: PropTypes.number.isRequired,
  severity: PropTypes.oneOf(['hight', 'medium', 'low']).isRequired
}

export default React.memo(Card)
