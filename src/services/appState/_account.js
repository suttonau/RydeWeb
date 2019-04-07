import React from 'react'
import { observable, action, computed, observe, runInAction } from 'mobx'

import Account from '../account/model'

export const ACCOUNT_STORE_KEY = 'ACCOUNT'
export const TOKEN_STORE_KEY = 'TOKEN'

/**
 * MobX store for authentication state and user profile.
 */
export default class AccountState {
  /**
   * Authentication token used with the backend.
   */
  @observable token = ''
  @observable account = { ...Account.create() }

  @observable RegistrationProgress = {
    email: '',
    password: '',
    receiveEmails: false
  }

  @computed get loggedIn(): boolean {
    return this.token != null
  }

  constructor() {
    // When AccountState is instantiated, "rehydrate" from the store
    // TODO: Write a refresh function that refreshes the account when you
    //       pass in the key
    this.refresh(ACCOUNT_STORE_KEY).then((data) => {
      this.account = Account.create({ ...data, foo: 'bar' })
    })

    this.refresh(TOKEN_STORE_KEY).then((token) => {
      this.token = token
    })
  }
}
