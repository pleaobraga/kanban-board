import Joi from '@hapi/joi'

import { handlerPut, handlerPost, handlerDelete } from './handler'
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
        status: {
          200: cardSchema
        },
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
      description: 'Create card',
      validate: {
        payload: cardSchema,
        failAction: (request, h, error) => {
          throw error
        }
      },
      response: {
        status: {
          201: cardSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerPost
  })

  server.route({
    method: 'DELETE',
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
          id: Joi.string().required()
        }).label('CardDeletePaylad'),
        failAction: (request, h, error) => {
          throw error
        }
      },
      response: {
        status: {
          204: cardSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerDelete
  })
}

exports.pkg = {
  name: 'card'
}
