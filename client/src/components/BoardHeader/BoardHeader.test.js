import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  const card = shallow(<Card name="Test" text="test" index={0} id={0} />)

  it('render properly', () => {
    expect(card).toMatchSnapshot()
  })
})
