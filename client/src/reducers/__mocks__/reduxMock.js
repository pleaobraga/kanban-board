import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export const mockStore = configureStore(middlewares)

export const initialStateReducer = {
  board: null,
  loadingContent: false,
  errorContent: false
}

export const initialStateRootReducer = {
  content: {
    board: null,
    loadingContent: false,
    errorContent: false
  }
}
