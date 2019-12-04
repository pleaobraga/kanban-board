import Joi from '@hapi/joi'
import { handlerGet, handlerPost } from './handler'

exports.register = (server, options) => {
  server.route({
    method: 'POST',
    path: '/',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      }
      // validate: {
      //   payload: Joi.object({
      //     lists: Joi.array().items(
      //       Joi.object({
      //         id: Joi.string().required(),
      //         title: Joi.string().required(),
      //         cards: Joi.array().items(
      //           Joi.object({
      //             id: Joi.string().required(),
      //             type: Joi.string().required(),
      //             duration: Joi.number().required(),
      //             severity: Joi.string().required()
      //           })
      //         )
      //       })
      //     )
      //   }),
      //   failAction: (request, h, error) => {
      //     throw error
      //   }
      // }
    },
    handler: handlerPost
  })

  server.route({
    method: 'GET',
    path: '/',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      }
    },
    handler: handlerGet
  })
}

exports.pkg = {
  name: 'board'
}
