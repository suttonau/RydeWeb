import { numbers, objectToCamelCase } from '../../../utils'
import { CarAPI } from './api'

export class Car {
  static api = CarAPI.create(Car)

  constructor({ id = null, name = '' } = {}) {
    Object.assign(this, {
      id,
      name
    })
  }

  static create(data = {}) {
    return new Car(data)
  }

  static fromAPI(json = {}) {
    const camelCaseJson = objectToCamelCase(json)
    return new Car(camelCaseJson)
  }

  copy() {
    return new Car(this)
  }

  update(data = {}) {
    return Object.assign(this.copy(), data)
  }
}
