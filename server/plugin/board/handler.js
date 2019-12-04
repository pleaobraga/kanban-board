import { Board, TaskList, Card } from '../../models'

const kanbanListsName = ['BackLog', 'To do', 'In progress', 'Testing', 'Done']

export const handlerGet = async (request, h) => {
  try {
    let board = await Board.findAll({
      where: {
        name: request.params.boardName
      }
    })

    console.log('board', board)

    // return 'success'

    // Create new Board
    if (board.length === 0) {
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

      console.log(newTaskLists[0].id)

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
        include: [
          {
            model: TaskList,
            as: 'TaskLists',
            include: [
              {
                model: Card,
                as: 'Cards'
              }
            ]
          }
        ]
      })

      h.re 
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const handlerPost = (request, h) => {
  return h.response({
    message: 'success'
  })
}
