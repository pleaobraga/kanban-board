import React from 'react'
import { mount } from 'enzyme'
import Card from './Card'
import { Provider } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {
  mockStore,
  initialStateRootReducer,
  card
} from '../../reducers/__mocks__/reduxMock'

const setup = ({ props = {}, state = {} }) => {
  const newProps = {
    ...card,
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
        <Droppable droppableId="droppable-1" type="PERSON">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Card {...newProps} />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Provider>
  )

  return contentPage
}

describe('Card', () => {
  it('should render properly', () => {
    const component = setup({})
    expect(component).toMatchSnapshot()
  })
})
