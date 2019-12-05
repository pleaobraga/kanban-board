import Boom from '@hapi/boom'

import { Board, TaskList, Card } from '../../models'

const kanbanListsName = ['BackLog', 'To do', 'In progress', 'Testing', 'Done']

export const handlerGet = async (request, h) => {
  try {
    let board = await Board.findOne({
      where: {
        name: request.params.boardName
      }
    })

    let code = 200

    // Create new Board
    if (!board) {
      code = 201

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
    }

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
      .code(code)
      .type('application/json')
  } catch (error) {
    throw Boom.badData(error)
  }
}
