import './KanbanBoardPage.scss'

import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Board from '../../components/Board'
import { findObject, removeObjFromArray } from '../../utils/utils'

class KanbanBoardPage extends React.Component {
  state = {
    lists: [
      {
        id: '0',
        title: 'Backlog',
        cards: [
          {
            id: 'test1',
            type: 'feature',
            duration: 1,
            severity: 'hight'
          },
          {
            id: 'test2',
            type: 'research',
            duration: 2,
            severity: 'medium'
          },
          {
            id: 'test3',
            type: 'content',
            duration: 3,
            severity: 'low'
          }
        ]
      }
    ]
  }

  onDragEnd = result => {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const column = findObject(this.state.lists, 'id', source.droppableId)
    const newCardsList = Array.from(column.cards)
    const removedItem = newCardsList.splice(source.index, 1)
    newCardsList.splice(destination.index, 0, removedItem[0])

    const newColumn = {
      ...column,
      cards: newCardsList
    }

    const newlists = removeObjFromArray(Array.from(this.state.lists), column)

    this.setState({
      lists: [...newlists, newColumn]
    })
  }

  render() {
    return (
      <div className="page page-kanban-board">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Board lists={this.state.lists} />
        </DragDropContext>
      </div>
    )
  }
}

export default KanbanBoardPage
