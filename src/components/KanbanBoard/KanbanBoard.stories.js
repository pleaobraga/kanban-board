import React from 'react'
import { storiesOf } from '@storybook/react'
import { KanbanBoard } from './KanbanBoard'

const cards = [
  {
    type: 'feature',
    duration: 1,
    severity: 'hight'
  },
  {
    type: 'research',
    duration: 2,
    severity: 'medium'
  },
  {
    type: 'update',
    duration: 3,
    severity: 'low'
  }
]

const lists = [
  {
    title: 'Backlog',
    cards
  },
  {
    title: 'To do ',
    cards
  },
  {
    title: 'Done',
    cards
  }
]

export default storiesOf('Components | kanban Board', module).add(
  'default',
  () => <KanbanBoard lists={lists} />,
  { info: { inline: true, header: false } }
)
