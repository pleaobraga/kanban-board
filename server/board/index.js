import Joi from '@hapi/joi'

exports.register = (server, options) => {
  server.route({
    method: 'POST',
    path: '/',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
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
      return 'success'
    }
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
    handler: (request, h) => {
      const payload = {
        lists: [
          {
            id: '0',
            title: 'Backlog',
            cards: [
              {
                id: 'test1',
                type: 'feature',
                duration: 1,
                severity: 'hight'
              },
              {
                id: 'test2',
                type: 'research',
                duration: 2,
                severity: 'medium'
              },
              {
                id: 'test3',
                type: 'content',
                duration: 3,
                severity: 'low'
              }
            ]
          },
          {
            id: '1',
            title: 'To DO',
            cards: []
          }
        ]
      }

      return payload
    }
  })
}

exports.pkg = {
  name: 'board'
}
