import React from 'react'
import { mount } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  const card = mount(<Card title="Test" text="test" />)

  it('render properly', () => {
    expect(card).toMatchSnapshot()
  })
})
