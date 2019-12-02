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

export const postBoard = newBoard => ({
  type: constant.POST_BOARD,
  newBoard
})

export const getBoard = () => dispatch => {
  dispatch(getBoardStart())

  return axios
    .get('http://localhost:8080')
    .then(response => {
      dispatch(getBoardSuccess(response.data))
      return response.data
    })
    .catch(error => getBoardError(error))
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
        board: action.board,
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
      return {
        ...state,
        board: { ...action.newBoard },
        loadingContent: false,
        errorContent: false
      }

    default:
      return state
  }
}

export default content
