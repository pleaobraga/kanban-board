import './Card.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { startCase, kebabCase } from 'lodash'
import { Draggable } from 'react-beautiful-dnd'

export const Card = ({ id, index, type, duration, severity }) => {
  const deleteItem = () => {
    //TODO Implemen delete function
  }

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={`card card__${kebabCase(type)}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <i className="material-icons close-icon" onClick={deleteItem}>
            close
          </i>
          <h3 className="card--type">{startCase(type)}</h3>
          <h4 className="card--duration">{`${duration} hr${
            duration > 1 ? 's' : ''
          }`}</h4>
          <h3 className="card--severity">{startCase(severity)}</h3>
        </div>
      )}
    </Draggable>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['feature', 'bugFix', 'update', 'research', 'content'])
    .isRequired,
  duration: PropTypes.number.isRequired,
  severity: PropTypes.oneOf(['hight', 'medium', 'low']).isRequired
}

export default React.memo(Card)
