import Joi from '@hapi/joi'
import { handlerPut } from './handler'

const CardType = {
  Feature: 'feature',
  BugFix: 'bugFix',
  Update: 'update',
  Research: 'research',
  Content: 'content'
}

exports.register = (server, options) => {
  server.route({
    method: 'PUT',
    path: '/card',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Update card',
      validate: {
        payload: Joi.object({
          id: Joi.string().required(),
          taskListId: Joi.string().required(),
          cardIndex: Joi.number().required()
        }).label('CardPutPaylad'),
        failAction: (request, h, error) => {
          throw error
        }
      },
      response: {
        schema: Joi.object({
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
        }).label('Card'),
        failAction: 'log'
      }
    },

    handler: handlerPut
  })
}

exports.pkg = {
  name: 'card'
}
