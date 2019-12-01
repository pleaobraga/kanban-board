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
      },
      {
        id: '1',
        title: 'To DO',
        cards: []
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

    const startColumn = findObject(this.state.lists, 'id', source.droppableId)
    const finishColum = findObject(
      this.state.lists,
      'id',
      destination.droppableId
    )

    if (startColumn.id === finishColum.id) {
      const column = findObject(this.state.lists, 'id', source.droppableId)
      const newCardsList = Array.from(column.cards)
      const removedItem = newCardsList.splice(source.index, 1)
      newCardsList.splice(destination.index, 0, removedItem[0])

      const newColumn = {
        ...column,
        cards: newCardsList
      }

      const newlists = removeObjFromArray(Array.from(this.state.lists), column)

      const sortList = [...newlists, newColumn].sort((a, b) => a.id - b.id)

      this.setState({
        lists: [...sortList]
      })
    } else {
      const startCards = Array.from(startColumn.cards)

      const removedItem = startCards.splice(source.index, 1)

      const newStart = {
        ...startColumn,
        cards: startCards
      }

      const finishCards = Array.from(finishColum.cards)

      finishCards.splice(destination.index, 0, removedItem[0])

      const newFinish = {
        ...finishColum,
        cards: finishCards
      }

      let newlists = Array.from(this.state.lists)

      removeObjFromArray(newlists, startColumn)
      removeObjFromArray(newlists, finishColum)

      const sortList = [...newlists, newStart, newFinish].sort(
        (a, b) => a.id - b.id
      )

      this.setState({
        lists: [...sortList]
      })
    }
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
