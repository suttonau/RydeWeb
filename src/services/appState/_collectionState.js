/**
 * Generic "Collection State" for managing collections within the appState.
 *
 * An abstraction that provides a simple interface for managing
 * paginated collections of entities from the API.
 * */
export default class CollectionState {
  constructor({
    count = null,
    refreshing = false,
    list = [],
    loadingNextPage = false,
    currentPageNum = 1,
    hasNextPage = false
  } = {}) {
    Object.assign(this, {
      count,
      refreshing,
      list,
      loadingNextPage,
      currentPageNum,
      hasNextPage
    })
  }

  // Factory Function
  static create(opts = {}) {
    return new CollectionState(opts)
  }

  /**
   * Create a `CollectionState` instance from the following common data structure:
   *
   * @param {object} data - API response data structure.
   *
   * @example
   *
   *     {
   *         count: Number,
   *         next: String|null,
   *         prev: String|null,
   *         results: Array<Object>
   *     }
   */
  static fromData(data = {}) {
    return new CollectionState({
      count: data.count,
      hasNextPage: data.next !== null,
      list: data.results
    })
  }

  /**
   * Mutation to add a page to a `CollectionState` instance.
   *
   * @param {CollectionState} state - Instance of `CollectionState`.
   * @param {object} data - The new page data to apply to the `CollectionState`.
   *
   * @returns {CollectionState} - A new `CollectionState` instance with the new data added.
   */
  static addPage(state, data = {}) {
    const newState = state.copy()
    newState.count = data.count
    newState.list = [...newState.list, ...data.results]
    newState.currentPageNum = state.nextPageNum
    newState.hasNextPage = data.next !== null
    return newState
  }

  copy() {
    return new CollectionState(this)
  }

  update(data = {}) {
    return CollectionState.create(Object.assign(this.copy(), data))
  }

  get nextPageNum() {
    return this.currentPageNum + 1
  }
}
