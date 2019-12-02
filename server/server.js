'use strict'

const Hapi = require('@hapi/hapi')
const Joi = require('@hapi/joi')

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!'
    }
  })

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

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
