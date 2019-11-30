import React from 'react'
import PropTypes from 'prop-types'
import TaskList from '../TaskList'
import './KanbanBoard.scss'

export const KanbanBoard = ({ lists }) => {
  return (
    <div className="kanban-board">
      {lists.map(list => (
        <TaskList key={list.title} title={list.title} cards={list.cards} />
      ))}
    </div>
  )
}

KanbanBoard.propTypes = {
  lists: PropTypes.arrayOf({
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
  })
}

export default KanbanBoard
