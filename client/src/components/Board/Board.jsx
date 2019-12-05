import './Board.scss'

import React from 'react'
import PropTypes from 'prop-types'

import TaskList from '../TaskList'

export const Board = ({ TaskLists }) => {
  return (
    <div className="board">
      {TaskLists.map(list => (
        <TaskList
          id={list.id}
          key={list.id}
          name={list.name}
          cards={list.Cards}
        />
      ))}
    </div>
  )
}

Board.propTypes = {
  TaskLists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      Cards: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
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
  )
}

export default Board
