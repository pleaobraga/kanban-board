import './TaskList.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { upperCase } from 'lodash'
import { Droppable } from 'react-beautiful-dnd'

import Card from '../Card'

export const TaskList = ({ id, title, cards }) => {
  return (
    <div className="task-list">
      <h2 className="task-list--title">{upperCase(title)}</h2>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className={`task-list--cards-container ${snapshot.isDraggingOver &&
              'dragging-over'}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                id={card.id}
                index={index}
                type={card.type}
                duration={card.duration}
                severity={card.severity}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

TaskList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([
        'feature',
        'bugFix',
        'update',
        'research',
        'content'
      ]).isRequired,
      duration: PropTypes.number.isRequired,
      severity: PropTypes.oneOf(['hight', 'medium', 'low']).isRequired
    })
  )
}

export default TaskList
