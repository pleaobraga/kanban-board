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
    throw Boom.badData(error)
  }
}

export const handlerPost = async (request, h) => {
  const { payload } = request

  console.log('payload', payload)

  try {
    let card = await Card.findOne({
      where: {
        id: payload.id
      }
    })

    const newCard = await card.update({
      TaskListId: payload.taskListId,
      index: payload.cardIndex
    })

    const schema = Joi.object({
      id: Joi.string(),
      index: Joi.number(),
      type: Joi.string().valid(
        CardType.Feature,
        CardType.BugFix,
        CardType.Update,
        CardType.Research,
        CardType.Content
      ),
      duration: Joi.number(),
      severity: Joi.string().valid('hight', 'medium', 'low')
    })

    return h
      .response(newCard)
      .code(200)
      .type('application/json')
  } catch (error) {
    throw Boom.badData(error)
  }
}
