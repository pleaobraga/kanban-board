import './BoardHeader.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { startCase } from 'lodash'

export const BoardHeader = ({ name }) => {
  const [createButton, setCreateButton] = React.useState(false)
  const [newCard, setNewCard] = React.useState({
    type: '',
    severity: '',
    duration: ''
  })

  const cardTask = {
    types: ['feature', 'bugFix', 'update', 'research', 'content'],
    severities: ['hight', 'medium', 'low']
  }

  const handleChange = event => {
    event.preventDefault()

    setNewCard({
      ...newCard,
      [event.target.name]: event.target.value
    })
  }

  const createCardTask = () => {}

  return (
    <div className="board-header">
      <h1 className="board-header--title"> Board Name: {startCase(name)}</h1>
      {createButton ? (
        <form className="form" id="createButton">
          <h2>New Task:</h2>

          <select name="type" value={newCard.type} onChange={handleChange}>
            {cardTask.types.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            name="severity"
            value={newCard.severity}
            onChange={handleChange}
          >
            {cardTask.severities.map(severity => (
              <option key={severity} value={severity}>
                {severity}
              </option>
            ))}
          </select>

          <input
            name="severity"
            value={newCard.severity}
            onChange={handleChange}
          />

          <button onClick={createCardTask}>Create Task</button>
          <button>Cancel</button>
        </form>
      ) : (
        <div className="board-header--actions">
          <button onClick={() => setCreateButton(true)}>Add new task </button>
        </div>
      )}
    </div>
  )
}

BoardHeader.propTypes = {
  name: PropTypes.string.isRequired
}

export default BoardHeader
