import Joi from '@hapi/joi'

exports.register = (server, options) => {
  server.route({
    method: 'POST',
    path: '/',
    config: {
      validate: {
        payload: Joi.object({
          lists: Joi.array().items(
            Joi.object({
              id: Joi.string().required(),
              title: Joi.string().required(),
              cards: Joi.array().items(
                Joi.object({
                  id: Joi.string().required(),
                  type: Joi.string().required(),
                  duration: Joi.number().required(),
                  severity: Joi.string().required()
                })
              )
            })
          )
        }),
        failAction: (request, h, error) => {
          throw error
        }
      }
    },
    handler: (request, h) => {
      return request.payload
    }
  })
}

exports.pkg = {
  name: 'board'
}
