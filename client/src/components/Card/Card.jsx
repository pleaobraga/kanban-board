import './Card.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { startCase, kebabCase } from 'lodash'
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'

import { deleteCard } from '../../reducers/BoardReducer'

export const Card = ({
  id,
  index,
  type,
  duration,
  severity,
  TaskListIndex
}) => {
  const dispatch = useDispatch()

  const deleteItem = () => {
    //TODO Implemen delete function

    const card = {
      id,
      index,
      TaskListIndex
    }

    dispatch(deleteCard(card))
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`card card--${kebabCase(type)} ${snapshot.isDragging &&
            'card--dragging'}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <i className="material-icons close-icon" onClick={deleteItem}>
            close
          </i>
          <h3 className="card__type">{startCase(type)}</h3>
          <h4 className="card__duration">{`${duration} hr${
            duration > 1 ? 's' : ''
          }`}</h4>
          <h3 className="card__severity">{startCase(severity)}</h3>
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
  severity: PropTypes.oneOf(['hight', 'medium', 'low']).isRequired,
  TaskListIndex: PropTypes.number.isRequired
}

export default React.memo(Card)
