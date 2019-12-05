import './BoardHeader.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { startCase } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import { postCard } from '../../reducers/BoardReducer'

export const BoardHeader = ({ name }) => {
  const dispatch = useDispatch()
  const { board } = useSelector(state => state.board)
  const [createButton, setCreateButton] = React.useState(false)
  const [newCard, setNewCard] = React.useState({
    type: 'feature',
    severity: 'medium',
    duration: 1
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

  const createCardTask = event => {
    event.preventDefault()

    const { TaskLists } = board
    const backLogList = TaskLists[0]

    const card = {
      ...newCard,
      index: backLogList.Cards.length,
      TaskListId: backLogList.id
    }

    dispatch(postCard(card))
  }

  return (
    <div className="board-header">
      <h1 className="board-header__title"> Board Name: {startCase(name)}</h1>
      <div className="board-header__actions">
        {createButton ? (
          <form className="form" id="createButton">
            <h2 className="form__title">New Task:</h2>

            <div className="form__values">
              <div className="form-control">
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  value={newCard.type}
                  onChange={handleChange}
                >
                  {cardTask.types.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label htmlFor="duration">Duration</label>
                <input
                  name="duration"
                  type="number"
                  value={newCard.duration}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label htmlFor="severity">Severity</label>
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
              </div>
            </div>

            <div className="form__actions">
              <button
                className="button button--primary"
                onClick={createCardTask}
              >
                Create Task
              </button>
              <button
                className="button button--secondary"
                onClick={() => setCreateButton(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button className="button " onClick={() => setCreateButton(true)}>
            Add new task{' '}
          </button>
        )}
      </div>
    </div>
  )
}

BoardHeader.propTypes = {
  name: PropTypes.string.isRequired
}

export default BoardHeader
