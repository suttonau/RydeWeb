import React, { Component } from 'react'
import { Form, Button, Grid, Input } from 'semantic-ui-react'
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
          <Form>
          <Grid stackable columns='equal'>
            <Grid.Row>
              {/* <Button.Group fluid widths="3" color="blue"> */}
              <Grid.Column>
                <Button attached="top" onClick={() => this._renderTabContent(DEFAULT)}>
                  Tab1
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button attached="top" onClick={() => this._renderTabContent(TAB2)}>
                  Tab 2
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button attached="top" onClick={() => this._renderTabContent(TAB3)}>
                  Tab 3
                </Button>
              </Grid.Column>
              {/* </Button.Group> */}
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Input label="Make" placeholder="Make" fluid />
              </Grid.Column>
              <Grid.Column>
                <Input label="Model" placeholder="Model" fluid />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Input label="Year" type="number" placeholder={CURRENT_YEAR} fluid />
              </Grid.Column>
              <Grid.Column>
                <Input label="Zip Code" placeholder="Zip Code" fluid />
              </Grid.Column>
              <Grid.Column width={4}>
                <Form.Button fluid  >Search</Form.Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Form>
        </div>
      </div>
    )
  }
}
