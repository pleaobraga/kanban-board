import React from 'react'
import { mount } from 'enzyme'
import TaskList from './TaskList'
import { Provider } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import {
  mockStore,
  initialStateRootReducer,
  taskList
} from '../../reducers/__mocks__/reduxMock'

const setup = ({ props = {}, state = {} }) => {
  const newProps = {
    ...taskList,
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
        <TaskList {...newProps} />
      </DragDropContext>
    </Provider>
  )

  return contentPage
}

describe('Task List', () => {
  it('should render properly', () => {
    const component = setup({})
    expect(component).toMatchSnapshot()
  })
})
