import React from 'react'
import { storiesOf } from '@storybook/react'
import { DragDropContext } from 'react-beautiful-dnd'

import ProviderWrapper from '../../../.storybook/provider'
import store from '../../../.storybook/configureStore'
import { taskLists, board } from '../../reducers/__mocks__/reduxMock'
import { Board } from './Board'

const initialState = {
  board,
  loadingContent: false,
  errorContent: false
}

const newStore = store(initialState)

const withProvider = story => (
  <ProviderWrapper store={newStore}>{story()}</ProviderWrapper>
)

export default storiesOf('Components | Board', module)
  .addDecorator(withProvider)
  .add(
    'default',
    () => (
      <DragDropContext>
        <Board TaskLists={taskLists} />
      </DragDropContext>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [Board]
      }
    }
  )
