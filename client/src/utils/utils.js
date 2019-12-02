import { isEqual } from 'lodash'

export const simulateRequest = data => {
  var promise = new Promise(function(resolve) {
    window.setTimeout(function() {
      resolve({ data })
    }, 3000)
  })
  return promise
}

export const findObject = (array, property, value) => {
  return array.find(element => element[property] === value)
}

export const removeObjFromArray = (array, object) => {
  let index = -1

  for (let i = 0; i < array.length; i++) {
    if (isEqual(array[i], object)) {
      index = i
      break
    }
  }

  if (index === -1) return

  array.splice(index, 1)

  return array
}
