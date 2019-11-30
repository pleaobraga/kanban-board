import './KanbanBoardPage.scss'

import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Board from '../../components/Board'

const KanbanBoardPage = () => {
  const cards = [
    {
      id: '0',
      type: 'feature',
      duration: 1,
      severity: 'hight'
    },
    {
      id: '1',
      type: 'research',
      duration: 2,
      severity: 'medium'
    },
    {
      id: '2',
      type: 'update',
      duration: 3,
      severity: 'low'
    }
  ]

  const lists = [
    {
      id: '0',
      title: 'Backlog',
      cards
    }
  ]

  const onDragEnd = () => {}

  return (
    <div className="page page-kanban-board">
      <DragDropContext onDragEnd={onDragEnd}>
        <Board lists={lists} />
      </DragDropContext>
    </div>
  )
}

export default KanbanBoardPage
