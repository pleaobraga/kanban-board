jest.mock('../../utils/utils')
import { initialStateReducer, mockStore } from '../__mocks__/reduxMock'
import * as constant from '../../utils/constants'
import contentReducer, {
  getBoardStart,
  getBoardError,
  getBoardSuccess
  // getBoard
} from './BoardReducer'

describe('Board Redux', () => {
  it('should return the initial state', () => {
    expect(contentReducer(undefined, {})).toEqual(initialStateReducer)
  })

  describe('Start to get the content', () => {
    const payload = { type: constant.GET_BOARD }

    it('should dispatch getBoardStart', () => {
      const store = mockStore(initialStateReducer)

      store.dispatch(getBoardStart())

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it(`should handle ${constant.GET_BOARD}`, () => {
      const actualState = { ...initialStateReducer, loadingContent: true }

      expect(contentReducer(undefined, payload)).toEqual(actualState)
    })
  })

  describe('Error to get the content', () => {
    const error = 'Error'
    const payload = { type: constant.GET_BOARD_ERROR, error }

    it('should dispatch getBoardError', () => {
      const store = mockStore(initialStateReducer)

      store.dispatch(getBoardError(error))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it(`should handle ${constant.GET_BOARD_ERROR}`, () => {
      const actualState = {
        ...initialStateReducer,
        loadingContent: false,
        errorContent: true
      }

      expect(contentReducer(undefined, payload)).toEqual(actualState)
    })
  })

  describe('Success to get content', () => {
    const board = {
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
    const payload = { type: constant.GET_BOARD_SUCCESS, board }

    it('should dispatch getBoardSuccess', () => {
      const store = mockStore(initialStateReducer)

      store.dispatch(getBoardSuccess(board))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it(`should handle ${constant.GET_BOARD_SUCCESS}`, () => {
      const actualState = {
        ...initialStateReducer,
        board: board,
        loadingContent: false,
        errorContent: false
      }

      expect(contentReducer(undefined, payload)).toEqual(actualState)
    })
  })

  // describe('Get the content', () => {
  //   it('Success to get the content', () => {
  //     const store = mockStore(initialStateReducer)

  //     return store.dispatch(getBoard()).then(() => {
  //       const board = {
  //         lists: [
  //           {
  //             id: '0',
  //             title: 'Backlog',
  //             cards: [
  //               {
  //                 id: 'test1',
  //                 type: 'feature',
  //                 duration: 1,
  //                 severity: 'hight'
  //               },
  //               {
  //                 id: 'test2',
  //                 type: 'research',
  //                 duration: 2,
  //                 severity: 'medium'
  //               },
  //               {
  //                 id: 'test3',
  //                 type: 'content',
  //                 duration: 3,
  //                 severity: 'low'
  //               }
  //             ]
  //           },
  //           {
  //             id: '1',
  //             title: 'To DO',
  //             cards: []
  //           }
  //         ]
  //       }
  //       const payload = [
  //         { type: constant.GET_BOARD },
  //         { type: constant.GET_BOARD_SUCCESS, board }
  //       ]

  //       const actions = store.getActions()
  //       expect(actions).toEqual(payload)
  //     })
  //   })
  // })
})
