import React from 'react'
import { storiesOf } from '@storybook/react'
import KanbanBoardPage from './KanbanBoardPage.stories'

export default storiesOf('Pages | Kanban Board Page', module).add(
  'default',
  () => <KanbanBoardPage />,
  { info: { inline: true, header: false } }
)
