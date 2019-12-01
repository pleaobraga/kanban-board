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

  changeCards = (
    listInitial,
    InitialIndex,
    listDestination,
    DestinationIndex
  ) => {
    const newInitialCards = Array.from(listInitial.cards)
    const removedItem = newInitialCards.splice(InitialIndex, 1)
    let newDestinationList = null

    let newlists = Array.from(this.state.lists)
    removeObjFromArray(newlists, listInitial)

    if (listInitial === listDestination) {
      newInitialCards.splice(DestinationIndex, 0, removedItem[0])
    } else {
      const newDestinationCards = Array.from(listDestination.cards)
      newDestinationCards.splice(DestinationIndex, 0, removedItem[0])

      newDestinationList = {
        ...listDestination,
        cards: newDestinationCards
      }

      removeObjFromArray(newlists, listDestination)
      newlists.push(newDestinationList)
    }

    const newlistInitial = {
      ...listInitial,
      cards: newInitialCards
    }

    const sortList = [...newlists, newlistInitial].sort((a, b) => a.id - b.id)

    this.setState({
      lists: [...sortList]
    })
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

    const listInitial = findObject(this.state.lists, 'id', source.droppableId)
    const listDestination = findObject(
      this.state.lists,
      'id',
      destination.droppableId
    )

    this.changeCards(
      listInitial,
      source.index,
      listDestination,
      destination.index
    )
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
