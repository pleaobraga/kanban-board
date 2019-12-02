import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Loader } from './Loader'

export default storiesOf('Components | Loader', module).add(
  'default',
  () => <Loader color={text('Loader Color', '#298a95')} />,
  { info: { inline: true, header: false } }
)
