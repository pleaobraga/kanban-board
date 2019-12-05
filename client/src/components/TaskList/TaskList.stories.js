import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import { DragDropContext } from 'react-beautiful-dnd'
import { text } from '@storybook/addon-knobs'

import ProviderWrapper from '../../../.storybook/provider'
import store from '../../../.storybook/configureStore'
import { board, card } from '../../reducers/__mocks__/reduxMock'
import { TaskList } from './TaskList'

const initialState = {
  board,
  loadingContent: false,
  errorContent: false
}

const newStore = store(initialState)

const withProvider = story => (
  <ProviderWrapper store={newStore}>{story()}</ProviderWrapper>
)

export default storiesOf('Components | Task List', module)
  .addDecorator(withProvider)
  .add(
    'default',
    () => (
      <DragDropContext>
        <TaskList
          Cards={[card]}
          id={'0'}
          index={0}
          TaskListIndex={1}
          name={text('Name', 'Task List')}
        />
      </DragDropContext>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [TaskList]
      }
    }
  )
