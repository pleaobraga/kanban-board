import React from 'react'
import { storiesOf } from '@storybook/react'
import { Board } from './Board'

const cards = [
  {
    id: '0',
    index: 0,
    type: 'feature',
    duration: 1,
    severity: 'hight'
  },
  {
    id: '1',
    index: 1,
    type: 'research',
    duration: 2,
    severity: 'medium'
  },
  {
    id: '2',
    index: 2,
    type: 'update',
    duration: 3,
    severity: 'low'
  }
]

const lists = [
  {
    id: '0',
    name: 'Backlog',
    cards
  },
  {
    id: '1',
    name: 'To do ',
    cards
  },
  {
    id: '2',
    name: 'Done',
    cards
  }
]

export default storiesOf('Components | Board', module).add(
  'default',
  () => <Board lists={lists} />,
  { info: { inline: true, header: false } }
)
