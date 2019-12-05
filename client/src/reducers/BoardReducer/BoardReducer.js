import * as constant from '../../utils/constants'
import axios from 'axios'

export const getBoardStart = () => ({
  type: constant.GET_BOARD
})

export const getBoardSuccess = board => ({
  type: constant.GET_BOARD_SUCCESS,
  board
})

export const getBoardError = error => ({
  type: constant.GET_BOARD_ERROR,
  error
})

export const postBoardStart = () => ({
  type: constant.POST_BOARD
})

export const postBoardSuccess = board => ({
  type: constant.POST_BOARD_SUCCESS,
  board
})

export const postBoardError = error => ({
  type: constant.POST_BOARD_ERROR,
  error
})

export const putBoardStart = () => ({
  type: constant.PUT_BOARD
})

export const putBoardSuccess = board => ({
  type: constant.PUT_BOARD_SUCCESS,
  board
})

export const putBoardError = error => ({
  type: constant.PUT_BOARD_ERROR,
  error
})

export const postBoard = (boardName = 0) => dispatch => {
  dispatch(postBoardStart())

  return axios
    .post(`${constant.API_URL}/board/${boardName}`)
    .then(response => {
      dispatch(postBoardSuccess(response.data))
      return response.data
    })
    .catch(error => {
      dispatch(postBoardError(error))
    })
}

export const getBoard = (boardName = 0) => dispatch => {
  dispatch(getBoardStart())

  return axios
    .get(`${constant.API_URL}/board/${boardName}`)
    .then(response => {
      dispatch(getBoardSuccess(response.data))
      return response.data
    })
    .catch(error => {
      if (error.response.status === 404) dispatch(postBoard(boardName))

      dispatch(getBoardError(error))
    })
}

export const putBoard = ({ board, card }) => dispatch => {
  dispatch(putBoardStart())

  debugger

  return axios
    .put(`${constant.API_URL}/card`, card)
    .then(response => {
      debugger
      dispatch(putBoardSuccess(board))
      return response.data
    })
    .catch(error => {
      dispatch(putBoardError(error))
    })
}

const initialState = {
  board: null,
  loadingContent: false,
  errorContent: false
}

const content = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_BOARD:
      return { ...state, loadingContent: true }

    case constant.GET_BOARD_SUCCESS:
      return {
        ...state,
        board: { ...action.board },
        loadingContent: false,
        errorContent: false
      }

    case constant.GET_BOARD_ERROR:
      return {
        ...state,
        loadingContent: false,
        errorContent: true
      }

    case constant.POST_BOARD:
      return { ...state, loadingContent: true }

    case constant.POST_BOARD_SUCCESS:
      return {
        ...state,
        board: { ...action.board },
        loadingContent: false,
        errorContent: false
      }

    case constant.POST_BOARD_ERROR:
      return {
        ...state,
        loadingContent: false,
        errorContent: true
      }

    case constant.PUT_BOARD:
      return { ...state, loadingContent: true }

    case constant.PUT_BOARD_SUCCESS:
      debugger

      return {
        ...state,
        board: { ...state.board, TaskList: [...action.board.TaskLists] },
        loadingContent: false,
        errorContent: false
      }

    case constant.PUT_BOARD_ERROR:
      return {
        ...state,
        loadingContent: false,
        errorContent: true
      }

    default:
      return state
  }
}

export default content
