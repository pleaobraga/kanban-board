import Boom from '@hapi/boom'

import { Board, TaskList, Card } from '../../models'

const kanbanListsName = ['BackLog', 'To do', 'In progress', 'Testing', 'Done']

export const handlerGet = async (request, h) => {
  let board

  try {
    board = await Board.findOne({
      where: {
        name: request.params.boardName
      }
    })
  } catch (err) {
    throw Boom.boomify(error)
  }

  console.log(board)

  if (!board) {
    throw Boom.notFound()
  }

  try {
    const data = await Board.findOne({
      where: { name: request.params.boardName },
      attributes: ['id', 'name'],
      include: [
        {
          model: TaskList,
          as: 'TaskLists',
          attributes: ['id', 'name'],
          include: [
            {
              model: Card,
              as: 'Cards',
              attributes: { exclude: ['createdAt', 'updatedAt', 'TaskListId'] }
            }
          ]
        }
      ]
    })

    return h
      .response(data)
      .code(200)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}

export const handlerPost = async (request, h) => {
  let board

  try {
    board = await Board.findOne({
      where: {
        name: request.params.boardName
      }
    })
  } catch (err) {
    throw Boom.boomify(error)
  }

  if (board) {
    throw Boom.conflict()
  }

  try {
    // Create new Board
    const newBoard = await Board.create({
      name: request.params.boardName
    })

    const newTaskLists = []

    // Create task lists
    const promises = kanbanListsName.map(async listName => {
      const taskList = await TaskList.create({
        name: listName,
        BoardId: newBoard.id
      })

      newTaskLists.push(taskList)
    })

    await Promise.all(promises)

    // Create one task card
    await Card.create({
      index: 0,
      duration: 2,
      severity: 'hight',
      type: 'feature',
      TaskListId: newTaskLists[0].id
    })

    const data = await Board.findOne({
      where: { name: request.params.boardName },
      attributes: ['id', 'name'],
      include: [
        {
          model: TaskList,
          as: 'TaskLists',
          attributes: ['id', 'name'],
          include: [
            {
              model: Card,
              as: 'Cards',
              attributes: { exclude: ['createdAt', 'updatedAt', 'TaskListId'] }
            }
          ]
        }
      ]
    })

    return h
      .response(data)
      .code(201)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}
