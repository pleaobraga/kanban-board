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
  board: {
    board: null,
    loadingContent: false,
    errorContent: false
  }
}

export const card = {
  id: '448957e7-99e0-41d2-b36d-7b647063293d',
  index: 0,
  type: 'feature',
  duration: 2,
  severity: 'hight',
  TaskListId: 'ae0e3de4-fa5c-4793-bde8-6c0b77a146fc',
  TaskListIndex: 0
}

export const taskList = {
  id: 'ae0e3de4-fa5c-4793-bde8-6c0b77a146fc',
  name: 'BackLog',
  index: 0,
  Cards: [card]
}

export const board = {
  id: 'da5ac7c2-3705-4a09-bf67-9c0ea4b3fae4',
  name: '1',
  TaskLists: [taskList]
}
