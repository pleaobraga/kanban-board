import './KanbanBoardPage.scss'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import Board from '../../components/Board'
import Loading from '../../components/Loader'
import ErrorPage from '../ErrorPage'
import {
  getBoard as actionGetBoard,
  postBoard
} from '../../reducers/BoardReducer'
import { findObject, removeObjFromArray } from '../../utils/utils'

const KanbanBoardPage = () => {
  const dispatch = useDispatch()
  const pageContent = useSelector(state => state.board)

  const getBoard = React.useCallback(() => dispatch(actionGetBoard()), [
    dispatch
  ])

  React.useEffect(() => {
    getBoard()
  }, [])

  const changeCards = (
    listInitial,
    InitialIndex,
    listDestination,
    DestinationIndex
  ) => {
    const newInitialCards = Array.from(listInitial.cards)
    const removedItem = newInitialCards.splice(InitialIndex, 1)
    let newDestinationList = null

    let newlists = Array.from(pageContent.board.lists)
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

    dispatch(postBoard({ lists: [...sortList] }))
  }

  const onDragEnd = result => {
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

    const listInitial = findObject(
      pageContent.board.lists,
      'id',
      source.droppableId
    )
    const listDestination = findObject(
      pageContent.board.lists,
      'id',
      destination.droppableId
    )

    changeCards(listInitial, source.index, listDestination, destination.index)
  }

  return pageContent.errorContent ? (
    <ErrorPage />
  ) : pageContent.board ? (
    <div className="page page-kanban-board">
      <DragDropContext onDragEnd={onDragEnd}>
        <Board lists={pageContent.board.lists} />
      </DragDropContext>
    </div>
  ) : (
    <Loading />
  )
}

export default KanbanBoardPage
