import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import ProviderWrapper from '../../../.storybook/provider'
import store from '../../../.storybook/configureStore'
import { board } from '../../reducers/__mocks__/reduxMock'
import { Card } from './Card'

const initialState = {
  board,
  loadingContent: false,
  errorContent: false
}

const newStore = store(initialState)

const withProvider = story => (
  <ProviderWrapper store={newStore}>{story()}</ProviderWrapper>
)

const getContent = () => {}

export default storiesOf('Components | Card', module)
  .addDecorator(withProvider)
  .add(
    'default',
    () => (
      <DragDropContext>
        <Droppable droppableId="droppable-1" type="PERSON">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Card
                getContent={getContent}
                id={'0'}
                index={0}
                type={select(
                  'Type',
                  ['feature', 'bug fix', 'update', 'research', 'content'],
                  'feature'
                )}
                duration={number('Duration', 1)}
                severity={select(
                  'Severity',
                  ['hight', 'medium', 'low'],
                  'medium'
                )}
                TaskListIndex={1}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    ),
    {
      info: {
        inline: true,
        header: false,
        source: false,
        propTables: [Card]
      }
    }
  )
