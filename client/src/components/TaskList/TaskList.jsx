import './TaskList.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { upperCase } from 'lodash'
import { Droppable } from 'react-beautiful-dnd'

import { default as Task } from '../Card'

export const TaskList = ({ id, name, Cards, index }) => {
  return (
    <div className="task-list">
      <h2 className="task-list__title">{upperCase(name)}</h2>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className={`task-list__cards-container ${snapshot.isDraggingOver &&
              'dragging-over'}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {Cards.map((card, cardIndex) => (
              <Task
                key={card.id}
                id={card.id}
                index={cardIndex}
                type={card.type}
                duration={card.duration}
                severity={card.severity}
                TaskListIndex={index}
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
  name: PropTypes.string.isRequired,
  Cards: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
  index: PropTypes.number.isRequired
}

export default TaskList
