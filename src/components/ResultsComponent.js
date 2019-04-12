import React, { Component } from 'react'
import CraigslistAPI from '../CraigslistApi'
import { Card, Image } from 'semantic-ui-react'

export default class ResultsComponent extends Component {
  state = {
    listings: []
  }
  render() {
    return <Card.Group itemsPerRow={4}>{this.renderResults(this.state.listings)}</Card.Group>
  }

  componentDidMount() {
    let client = new CraigslistAPI()
    let options = this.props.options
    client.getListings((listings) => this.setState({ listings }))
  }

  renderResults = (listings) => {
    return listings.map((listing) => {
      if (listing) {
		let { pid, title, images, price } = listing
        return (
          <Card key={pid}>
            <Image src={images && images[0] ? images[0]: null} />
            <Card.Content>
              <Card.Header>{title}</Card.Header>
              <Card.Description>{price}</Card.Description>
            </Card.Content>
          </Card>
        )
      }
    })
  }
}
