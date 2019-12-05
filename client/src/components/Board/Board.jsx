import './Board.scss'

import React from 'react'
import PropTypes from 'prop-types'

import TaskList from '../TaskList'

export const Board = ({ TaskLists }) => {
  return (
    <div className="board">
      {TaskLists.map((list, index) => (
        <TaskList
          id={list.id}
          key={list.id}
          name={list.name}
          Cards={list.Cards}
          index={index}
        />
      ))}
    </div>
  )
}

Board.propTypes = {
  TaskLists: PropTypes.arrayOf(PropTypes.shape(TaskList.propTypes))
}

export default Board
