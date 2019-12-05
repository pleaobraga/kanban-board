import React from 'react'
import { shallow } from 'enzyme'
import TaskList from './TaskList'

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

describe('Task List', () => {
  const component = shallow(<TaskList name="Task List" cards={cards} />)

  it('render properly', () => {
    expect(component).toMatchSnapshot()
  })
})
