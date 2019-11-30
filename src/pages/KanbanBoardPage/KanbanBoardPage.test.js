import React from 'react'
import { shallow } from 'enzyme'
import KanbanBoardPage from './KanbanBoardPage'

describe('Kanban Board Page', () => {
  const welcomePage = shallow(<KanbanBoardPage />)

  it('render proprely', () => {
    expect(welcomePage).toMatchSnapshot()
  })
})
