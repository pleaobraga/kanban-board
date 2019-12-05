import Boom from '@hapi/boom'
import Joi from '@hapi/joi'

import { Card } from '../../models'

export const handlerPut = async (request, h) => {
  const { payload } = request

  try {
    let card = await Card.findOne({
      where: {
        id: payload.id
      }
    })

    await card.update({
      TaskListId: payload.taskListId,
      index: payload.cardIndex
    })

    let newCard = await Card.findOne({
      where: {
        id: payload.id
      },
      attributes: { exclude: ['createdAt', 'updatedAt', 'TaskListId'] }
    })

    return h
      .response(newCard)
      .code(200)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}

export const handlerPost = async (request, h) => {
  const { payload } = request

  try {
    let newCard = await Card.create({
      index: payload.index,
      type: payload.type,
      duration: payload.duration,
      severity: payload.severity,
      TaskListId: payload.TaskListId
    })

    newCard = await Card.findOne({
      where: {
        id: newCard.id
      },
      attributes: { exclude: ['createdAt', 'updatedAt', 'TaskListId'] }
    })

    return h
      .response(newCard)
      .code(201)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}

export const handlerDelete = async (request, h) => {
  const { payload } = request

  try {
    await Card.destroy({
      where: {
        id: payload.id
      }
    })

    return h
      .response()
      .code(204)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}
