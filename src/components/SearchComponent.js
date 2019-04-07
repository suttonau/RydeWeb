import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import './styles/Search.css'

const CURRENT_YEAR = new Date().getFullYear()

//Modes for tab sorting
const DEFAULT = 'DEFAULT'
const TAB2 = 'TAB2'
const TAB3 = 'TAB3'

export default class SearchComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: DEFAULT
    }
  }

  /**
   * @description      Example function to render different tabs onClick events
   * @param [tabEvent] Given Searchbar tab that is clicked on
   * @todo             Change the return value to match the different search bar content for each tab
   */
  _renderTabContent = (tabEvent) => console.log('TAB EVENT:', tabEvent)

  render() {
    // const { mode } = this.state

    return (
      <div>
        <div className="search-container">
          <Button.Group fluid widths="3" color="blue">
            <Button attached="top" onClick={() => this._renderTabContent(DEFAULT)}>
              Tab1
            </Button>
            <Button attached="top" onClick={() => this._renderTabContent(TAB2)}>
              Tab 2
            </Button>
            <Button attached="top" onClick={() => this._renderTabContent(TAB3)}>
              Tab 3
            </Button>
          </Button.Group>
          <Form className="form">
            <Form.Group>
              <Form.Input label="Make" placeholder="Make" />
              <Form.Input label="Model" placeholder="Model" />
              <Form.Input label="Year" type="number" placeholder={CURRENT_YEAR} />
            </Form.Group>
            <Form.Group>
              <Form.Input label="Zip Code" placeholder="Zip Code" />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      </div>
    )
  }
}
