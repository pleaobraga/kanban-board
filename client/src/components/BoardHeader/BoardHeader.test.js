import React from 'react'
import { mount } from 'enzyme'
import BoardHeader from './BoardHeader'
import { Provider } from 'react-redux'
import {
  mockStore,
  initialStateRootReducer
} from '../../reducers/__mocks__/reduxMock'

const setup = ({ state = {} }) => {
  const newState = {
    board: {
      ...initialStateRootReducer.content,
      ...state
    }
  }

  const store = mockStore(newState)

  const contentPage = mount(
    <Provider store={store}>
      <BoardHeader name="test" />
    </Provider>
  )

  return contentPage
}

describe('Board Header', () => {
  it('should render properly', () => {
    const component = setup({})
    expect(component).toMatchSnapshot()
  })
})
