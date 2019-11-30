import React from 'react'
import Board from '../../components/Board'
import './KanbanBoardPage.scss'

const KanbanBoardPage = () => {
  const cards = [
    {
      type: 'feature',
      duration: 1,
      severity: 'hight'
    },
    {
      type: 'research',
      duration: 2,
      severity: 'medium'
    },
    {
      type: 'update',
      duration: 3,
      severity: 'low'
    }
  ]

  const lists = [
    {
      title: 'Backlog',
      cards
    },
    {
      title: 'To do ',
      cards
    },
    {
      title: 'Done',
      cards
    }
  ]

  return (
    <div className="page page-kanban-board">
      <Board lists={lists} />
    </div>
  )
}

export default KanbanBoardPage
