import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import { Card } from './Card'

export default storiesOf('Components | Card', module).add(
  'default',
  () => (
    <Card
      type={select(
        'Type',
        ['feature', 'bug fix', 'update', 'research', 'content'],
        'feature'
      )}
      duration={number('Duration', 1)}
      severity={select('Severity', ['hight', 'medium', 'low'], 'medium')}
    />
  ),
  { info: { inline: true, header: false } }
)
