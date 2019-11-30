import React from 'react'
import { mount } from 'enzyme'
import Board from './Board'

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

const lists = [
  {
    title: 'Backlog',
    cards
  },
  {
    title: 'To do ',
    cards
  },
  {
    title: 'Done',
    cards
  }
]

describe('Kanban Board', () => {
  const component = mount(<Board lists={lists} />)

  it('render properly', () => {
    expect(component).toMatchSnapshot()
  })
})