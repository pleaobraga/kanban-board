import Joi from '@hapi/joi'

import { handlerGet } from './handler'
import { boardSchema } from '../../schema'

exports.register = (server, options) => {
  server.route({
    method: 'GET',
    path: '/{boardName}',

    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Get Board',
      response: {
        schema: boardSchema,
        failAction: 'log'
      }
    },

    handler: handlerGet
  })
}

exports.pkg = {
  name: 'board'
}
