import React from 'react'
import { shallow } from 'enzyme'
import Board from './Board'

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

const lists = [
  {
    id: '0',
    title: 'Backlog',
    cards
  },
  {
    id: '1',
    title: 'To do ',
    cards
  },
  {
    id: '2',
    title: 'Done',
    cards
  }
]

describe('Board', () => {
  const component = shallow(<Board lists={lists} />)

  it('render properly', () => {
    expect(component).toMatchSnapshot()
  })
})
