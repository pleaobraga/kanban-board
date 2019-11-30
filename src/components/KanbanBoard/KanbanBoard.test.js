import React from 'react'
import { mount } from 'enzyme'
import TaskList from './TaskList'

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

describe('Task List', () => {
  const component = mount(<TaskList title="Task List" cards={cards} />)

  it('render properly', () => {
    expect(component).toMatchSnapshot()
  })
})
