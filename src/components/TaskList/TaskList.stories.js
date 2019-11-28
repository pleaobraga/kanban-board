import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { TaskList } from './TaskList'

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

export default storiesOf('Components | TaskList', module).add(
  'default',
  () => <TaskList title={text('Title', 'Task List')} cards={cards} />,
  { info: { inline: true, header: false } }
)
