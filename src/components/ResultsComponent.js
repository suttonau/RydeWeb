import React, { Component } from 'react'
import CraigslistAPI from '../CraigslistApi'


export default class ResultsComponent extends Component {
  render() {
	let client = new CraigslistAPI()
	client.getListings()
    return <div />
  }
}
