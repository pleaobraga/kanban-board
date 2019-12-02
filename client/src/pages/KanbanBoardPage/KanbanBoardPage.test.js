import React from 'react'
import { shallow } from 'enzyme'
import KanbanBoardPage from './KanbanBoardPage'
import { Provider } from 'react-redux'
import {
  mockStore,
  initialStateRootReducer
} from '../../reducers/__mocks__/reduxMock'

const setup = state => {
  const newState = {
    content: {
      ...initialStateRootReducer.content,
      ...state
    }
  }

  const store = mockStore(newState)

  const contentPage = shallow(
    <Provider store={store}>
      <KanbanBoardPage />
    </Provider>
  )

  return contentPage
}

describe('Kanban Board Page', () => {
  const KanbanPage = setup()

  it('render proprely', () => {
    expect(KanbanPage).toMatchSnapshot()
  })
})
