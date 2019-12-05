jest.mock('../../utils/utils')
import { initialStateReducer, mockStore } from '../__mocks__/reduxMock'
import * as constant from '../../utils/constants'
import contentReducer from './BoardReducer'
import {
  getBoardStart,
  getBoardError,
  getBoardSuccess,
  postBoardStart,
  postBoardError,
  postBoardSuccess,
  putBoardStart,
  putBoardError,
  putBoardSuccess
} from './BorderActions'

describe('Board Redux', () => {
  it('should return the initial state', () => {
    expect(contentReducer(undefined, {})).toEqual(initialStateReducer)
  })

  describe('GET BOARD', () => {
    describe('Start to get the board', () => {
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

    describe('Error to get the board', () => {
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

    describe('Success to get board', () => {
      const board = {
        lists: [
          {
            id: '0',
            name: 'Backlog',
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
            name: 'To DO',
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
  })

  describe('POST BOARD', () => {
    describe('Start to post the board', () => {
      const payload = { type: constant.POST_BOARD }

      it('should dispatch postBoardStart', () => {
        const store = mockStore(initialStateReducer)

        store.dispatch(postBoardStart())

        const actions = store.getActions()
        expect(actions).toEqual([payload])
      })

      it(`should handle ${constant.POST_BOARD}`, () => {
        const actualState = { ...initialStateReducer, loadingContent: true }

        expect(contentReducer(undefined, payload)).toEqual(actualState)
      })
    })

    describe('Error to post the board', () => {
      const error = 'Error'
      const payload = { type: constant.POST_BOARD_ERROR, error }

      it('should dispatch postBoardError', () => {
        const store = mockStore(initialStateReducer)

        store.dispatch(postBoardError(error))

        const actions = store.getActions()
        expect(actions).toEqual([payload])
      })

      it(`should handle ${constant.POST_BOARD_ERROR}`, () => {
        const actualState = {
          ...initialStateReducer,
          loadingContent: false,
          errorContent: true
        }

        expect(contentReducer(undefined, payload)).toEqual(actualState)
      })
    })

    describe('Success to post board', () => {
      const board = {
        lists: [
          {
            id: '0',
            name: 'Backlog',
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
            name: 'To DO',
            cards: []
          }
        ]
      }
      const payload = { type: constant.POST_BOARD_SUCCESS, board }

      it('should dispatch postBoardSuccess', () => {
        const store = mockStore(initialStateReducer)

        store.dispatch(postBoardSuccess(board))

        const actions = store.getActions()
        expect(actions).toEqual([payload])
      })

      it(`should handle ${constant.POST_BOARD_SUCCESS}`, () => {
        const actualState = {
          ...initialStateReducer,
          board: board,
          loadingContent: false,
          errorContent: false
        }

        expect(contentReducer(undefined, payload)).toEqual(actualState)
      })
    })
  })

  describe('PUT BOARD', () => {
    describe('Start to put the board', () => {
      const payload = { type: constant.PUT_BOARD }

      it('should dispatch putBoardStart', () => {
        const store = mockStore(initialStateReducer)

        store.dispatch(putBoardStart())

        const actions = store.getActions()
        expect(actions).toEqual([payload])
      })

      it(`should handle ${constant.PUT_BOARD}`, () => {
        const actualState = { ...initialStateReducer, loadingContent: true }

        expect(contentReducer(undefined, payload)).toEqual(actualState)
      })
    })

    describe('Error to put the board', () => {
      const error = 'Error'
      const payload = { type: constant.PUT_BOARD_ERROR, error }

      it('should dispatch putBoardError', () => {
        const store = mockStore(initialStateReducer)

        store.dispatch(putBoardError(error))

        const actions = store.getActions()
        expect(actions).toEqual([payload])
      })

      it(`should handle ${constant.PUT_BOARD_ERROR}`, () => {
        const actualState = {
          ...initialStateReducer,
          loadingContent: false,
          errorContent: true
        }

        expect(contentReducer(undefined, payload)).toEqual(actualState)
      })
    })

    describe('Success to put board', () => {
      const board = {
        TaskLists: [
          {
            id: '0',
            name: 'Backlog',
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
            name: 'To DO',
            cards: []
          }
        ]
      }
      const payload = { type: constant.PUT_BOARD_SUCCESS, board }

      it('should dispatch putBoardSuccess', () => {
        const store = mockStore(initialStateReducer)

        store.dispatch(putBoardSuccess(board))

        const actions = store.getActions()
        expect(actions).toEqual([payload])
      })

      it(`should handle ${constant.PUT_BOARD_SUCCESS}`, () => {
        const actualState = {
          ...initialStateReducer,
          board: board,
          loadingContent: false,
          errorContent: false
        }

        expect(contentReducer(undefined, payload)).toEqual(actualState)
      })
    })
  })
})
