import Joi from '@hapi/joi'

import { handlerGet, handlerPost } from './handler'
import { boardSchema } from '../../schema'

exports.register = (server, options) => {
  server.route({
    method: 'GET',
    path: '/board/{boardName}',

    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Get Board',
      response: {
        status: {
          200: boardSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerGet
  })

  server.route({
    method: 'POST',
    path: '/board/{boardName}',

    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Create Board',
      response: {
        status: {
          201: boardSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerPost
  })
}

exports.pkg = {
  name: 'board'
}
