import React from 'react'
import PropTypes from 'prop-types'
import { upperCase } from 'lodash'
import Card from '../Card'
import './TaskList.scss'

export const TaskList = ({ title, cards }) => {
  return (
    <div className="task-list">
      <h2 className="task-list--title">{upperCase(title)}</h2>
      <div className="task-list--cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            type={card.type}
            duration={card.duration}
            severity={card.severity}
          />
        ))}
      </div>
    </div>
  )
}

TaskList.propTypes = {
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
