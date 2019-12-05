import * as constant from '../../utils/constants'
import axios from 'axios'

// ---- BOARD ----
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
      const orderTasklists = response.data.TaskLists.sort(
        (a, b) => a.index - b.index
      )

      dispatch(getBoardSuccess({ ...response.data, TaskLists: orderTasklists }))

      return response.data
    })
    .catch(error => {
      if (error.response.status === 404) return dispatch(postBoard(boardName))

      dispatch(getBoardError(error))
    })
}

export const putBoard = ({ board, card }) => dispatch => {
  dispatch(putBoardSuccess(board))

  return axios
    .put(`${constant.API_URL}/card`, card)
    .then(response => {
      return response.data
    })
    .catch(error => {
      dispatch(putBoardError(error))
    })
}

// ---- CARD ----

export const postCardStart = () => ({
  type: constant.POST_CARD
})

export const postCardSuccess = card => ({
  type: constant.POST_CARD_SUCCESS,
  card
})

export const postCardError = error => ({
  type: constant.POST_CARD_ERROR,
  error
})

export const deleteCardStart = () => ({
  type: constant.DELETE_CARD
})

export const deleteCardSuccess = card => ({
  type: constant.DELETE_CARD_SUCCESS,
  card
})

export const deleteCardError = error => ({
  type: constant.DELETE_CARD_ERROR,
  error
})

export const postCard = card => dispatch => {
  dispatch(postCardStart())

  return axios
    .post(`${constant.API_URL}/card`, card)
    .then(response => {
      dispatch(postCardSuccess(response.data))
      return response.data
    })
    .catch(error => {
      dispatch(postCardError(error))
    })
}

export const deleteCard = card => dispatch => {
  dispatch(deleteCardStart())

  return axios
    .delete(`${constant.API_URL}/card/${card.id}`)
    .then(() => {
      dispatch(deleteCardSuccess(card))
      return
    })
    .catch(error => {
      dispatch(deleteCardError(error))
    })
}
