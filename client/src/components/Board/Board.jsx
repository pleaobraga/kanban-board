import './Board.scss'

import React from 'react'
import PropTypes from 'prop-types'

import TaskList from '../TaskList'

export const Board = ({ lists }) => {
  return (
    <div className="board">
      {lists.map(list => (
        <TaskList
          id={list.id}
          key={list.id}
          title={list.title}
          cards={list.cards}
        />
      ))}
    </div>
  )
}

Board.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
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
  )
}

export default Board
