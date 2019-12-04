export const handlerGet = (request, h) => {
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

export const handlerPost = (request, h) => {
  return h.response({
    message: 'success'
  })
}
