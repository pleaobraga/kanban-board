import React from 'react'
import { mount } from 'enzyme'
import Loader from './Loader'

describe('Loader', () => {
  let loading = mount(<Loader />)

  it('render proprely', () => {
    expect(loading).toMatchSnapshot()
  })
})
