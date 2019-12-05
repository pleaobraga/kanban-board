import Joi from '@hapi/joi'
import { handlerGet } from './handler'

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
      description: 'Get Board'
    },

    handler: handlerGet
  })
}

exports.pkg = {
  name: 'board'
}
