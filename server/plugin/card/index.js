import Joi from '@hapi/joi'

import { handlerPut, handlerPost } from './handler'
import { cardSchema } from '../../schema'

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
        schema: cardSchema,
        failAction: 'log'
      }
    },

    handler: handlerPut
  })

  server.route({
    method: 'POST',
    path: '/card',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Update card',
      validate: {
        payload: cardSchema,
        failAction: (request, h, error) => {
          throw error
        }
      },
      response: {
        schema: cardSchema,
        failAction: 'log'
      }
    },

    handler: handlerPost
  })
}

exports.pkg = {
  name: 'card'
}
