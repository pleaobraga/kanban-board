import { simulateRequest, findObject, removeObjFromArray } from './utils'

describe('Utils', () => {
  describe('simulateRequest', () => {
    it('should Simulate Request function', () => {
      const data = { test: 'test' }

      return simulateRequest(data).then(resp => {
        expect(resp).toEqual({ data })
      })
    })
  })

  describe('findObject', () => {
    it('should find object', () => {
      const array = [{ index: 0 }, { index: 1 }, { index: 2 }]
      const property = 'index'
      const value = 1

      const answer = { index: 1 }

      const result = findObject(array, property, value)
      expect(result).toEqual(answer)
    })
  })

  describe('removeObjFromArray', () => {
    it('should remove oject from array', () => {
      const array = [{ index: 0 }, { index: 1 }, { index: 2 }]
      const obj = { index: 1 }

      const answer = [{ index: 0 }, { index: 2 }]

      const result = removeObjFromArray(array, obj)
      expect(result).toEqual(answer)
    })

    it('should not remove oject from array', () => {
      const array = [{ index: 0 }, { index: 1 }, { index: 2 }]
      const obj = { index: 4 }

      const answer = undefined

      const result = removeObjFromArray(array, obj)
      expect(result).toEqual(answer)
    })
  })
})
