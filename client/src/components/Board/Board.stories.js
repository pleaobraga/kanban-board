import React from 'react'
import { storiesOf } from '@storybook/react'

import Board from './Board'
import { board } from '../../reducers/__mocks__/reduxMock'

export default storiesOf('Components | Board', module).add(
  'default',
  () => <Board TaskLists={board.TaskLists} />,
  { info: { inline: true, header: false } }
)
