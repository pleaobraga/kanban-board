import React from 'react'
import { mount } from 'enzyme'
import Board from './Board'
import { Provider } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import {
  mockStore,
  initialStateRootReducer,
  board
} from '../../reducers/__mocks__/reduxMock'

const setup = ({ props = {}, state = {} }) => {
  const newProps = {
    ...board,
    ...props
  }

  const newState = {
    board: {
      ...initialStateRootReducer.content,
      ...state
    }
  }

  const store = mockStore(newState)

  const contentPage = mount(
    <Provider store={store}>
      <DragDropContext>
        <Board {...newProps} />
      </DragDropContext>
    </Provider>
  )

  return contentPage
}

describe('Board', () => {
  it('should render properly', () => {
    const component = setup({})
    expect(component).toMatchSnapshot()
  })
})
