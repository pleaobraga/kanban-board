import * as constant from '../../utils/constants'

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
      return {
        ...state,
        board: {
          ...state.board,
          TaskLists: [...action.board.TaskLists]
        },
        loadingContent: false,
        errorContent: false
      }

    case constant.PUT_BOARD_ERROR:
      return {
        ...state,
        loadingContent: false,
        errorContent: true
      }

    case constant.POST_CARD:
      return { ...state, loadingContent: true }

    case constant.POST_CARD_SUCCESS: {
      const newTaskLists = [...state.board.TaskLists]
      newTaskLists[0].Cards.push(action.card)

      return {
        ...state,
        board: {
          ...state.board,
          TaskLists: [...newTaskLists]
        },
        loadingContent: false,
        errorContent: false
      }
    }

    case constant.POST_CARD_ERROR:
      return {
        ...state,
        loadingContent: false,
        errorContent: true
      }

    case constant.DELETE_CARD:
      return { ...state, loadingContent: true }

    case constant.DELETE_CARD_SUCCESS: {
      const { index, TaskListIndex } = action.card

      const newTaskLists = [...state.board.TaskLists]

      newTaskLists[TaskListIndex].Cards.splice(index, 1)

      return {
        ...state,
        board: {
          ...state.board,
          TaskLists: [...newTaskLists]
        },
        loadingContent: false,
        errorContent: false
      }
    }

    case constant.DELETE_CARD_ERROR:
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
