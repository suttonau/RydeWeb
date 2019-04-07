import { observable, action } from 'mobx'
import Car from '../cars'
import CollectionState from './_collectionState'

/**
 * Class that uses MobX observables to provide a store
 * and action interface for cars state.
 * */
export default class CarState {
  @observable carItems = { ...CollectionState.create() }

  @action carCollection() {
    const state = this.carItems
    return Car.api
      .list()
      .then((data) => {
        state.list = data.results
        state.refreshing = false
        state.currentPageNum = 1
        state.hasNextPage = data.next !== null
      })
      .catch((error) => {
        throw error
      })
  }
}
