import React from 'react'
import { storiesOf } from '@storybook/react'

import ProviderWrapper from '../../../.storybook/provider'
import store from '../../../.storybook/configureStore'
import { board } from '../../reducers/__mocks__/reduxMock'
import { BoardHeader } from './BoardHeader'

const initialState = {
  board,
  loadingContent: false,
  errorContent: false
}

const newStore = store(initialState)

const withProvider = story => (
  <ProviderWrapper store={newStore}>{story()}</ProviderWrapper>
)

export default storiesOf('Components | Board Header', module)
  .addDecorator(withProvider)
  .add('default', () => <BoardHeader name={'KanbanBoard'} />, {
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: [BoardHeader]
    }
  })
