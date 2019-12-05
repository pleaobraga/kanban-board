import './KanbanBoardPage.scss'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { useParams } from 'react-router-dom'

import Board from '../../components/Board'
import BoardHeader from '../../components/BoardHeader'
import Loading from '../../components/Loader'
import ErrorPage from '../ErrorPage'
import {
  getBoard as actionGetBoard,
  putBoard
} from '../../reducers/BoardReducer'
import { findObject, removeObjFromArray } from '../../utils/utils'

const KanbanBoardPage = () => {
  const dispatch = useDispatch()
  const pageContent = useSelector(state => state.board)
  const { boardName } = useParams()

  React.useEffect(() => {
    dispatch(actionGetBoard(boardName || 0))
  }, [])

  const changeCards = (
    listInitial,
    initialIndex,
    listDestination,
    destinationIndex
  ) => {
    const newInitialCards = Array.from(listInitial.Cards)
    const removedItem = newInitialCards.splice(initialIndex, 1)
    let newDestinationList = null

    let newlists = Array.from(pageContent.board.TaskLists)
    removeObjFromArray(newlists, listInitial)

    if (listInitial === listDestination) {
      newInitialCards.splice(destinationIndex, 0, removedItem[0])
    } else {
      const newDestinationCards = Array.from(listDestination.Cards)
      newDestinationCards.splice(destinationIndex, 0, removedItem[0])

      newDestinationList = {
        ...listDestination,
        Cards: newDestinationCards
      }

      removeObjFromArray(newlists, listDestination)
      newlists.push(newDestinationList)
    }

    const newlistInitial = {
      ...listInitial,
      Cards: newInitialCards
    }

    const sortList = [...newlists, newlistInitial].sort(
      (a, b) => a.index - b.index
    )

    dispatch(
      putBoard({
        board: { TaskLists: [...sortList] },
        card: {
          id: removedItem[0].id,
          cardIndex: destinationIndex,
          taskListId: listDestination.id
        }
      })
    )
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
      pageContent.board.TaskLists,
      'id',
      source.droppableId
    )

    const listDestination = findObject(
      pageContent.board.TaskLists,
      'id',
      destination.droppableId
    )

    changeCards(listInitial, source.index, listDestination, destination.index)
  }

  const { errorContent, board } = pageContent

  return errorContent ? (
    <ErrorPage />
  ) : board ? (
    <div className="page page-kanban-board">
      <BoardHeader name={board.name} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Board TaskLists={board.TaskLists} />
      </DragDropContext>
    </div>
  ) : (
    <Loading />
  )
}

export default KanbanBoardPage
