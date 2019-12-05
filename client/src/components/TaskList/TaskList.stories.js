import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { TaskList } from './TaskList'

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

export default storiesOf('Components | TaskList', module).add(
  'default',
  () => <TaskList name={text('name', 'Task List')} cards={cards} />,
  { info: { inline: true, header: false } }
)
