import React, { Component } from 'react'
import { Form, Button, Grid, Input } from 'semantic-ui-react'
import './styles/Search.css'
import ResultsComponent from './ResultsComponent'

const CURRENT_YEAR = new Date().getFullYear()

//Modes for tab sorting
const DEFAULT = 'DEFAULT'
const TAB2 = 'TAB2'
const TAB3 = 'TAB3'

export default class SearchComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: DEFAULT,
    
      make: '',
      model: '',
      year: null,
      zipCode: 0,
      priceMin: 0,
      priceMax: 0
    }
  }

  /**
   * @description      Example function to render different tabs onClick events
   * @param [tabEvent] Given Searchbar tab that is clicked on
   * @todo             Change the return value to match the different search bar content for each tab
   */
  _renderTabContent = (tabEvent) => console.log('TAB EVENT:', tabEvent)

  handleSubmit = (event) => {
    let {make, model, year, zipCode, priceMin, priceMax} = this.state
    let query = {make, model, year, zipCode, priceMin, priceMax }

    console.log(query)
  }

  handleChange = (event, {name, value}) => {
    this.setState({[name]: value})
  }
  render() {
    // const { mode } = this.state

    return (
      <div>
        <div className="search-container">
          <Form onSubmit={this.handleSubmit}>
            <Grid columns="equal" stackable>
              <Grid.Row>
                {/* <Button.Group fluid widths="3" color="blue"> */}
                <Grid.Column>
                  <Button
                    color="blue"
                    attached="top"
                    onClick={() => this._renderTabContent(DEFAULT)}
                  >
                    Tab1
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button color="blue" attached="top" onClick={() => this._renderTabContent(TAB2)}>
                    Tab 2
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button color="blue" attached="top" onClick={() => this._renderTabContent(TAB3)}>
                    Tab 3
                  </Button>
                </Grid.Column>
                {/* </Button.Group> */}
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Input name="make" label="Make" placeholder="Make" fluid onChange={this.handleChange}/>
                </Grid.Column>
                <Grid.Column>
                  <Input name="model" label="Model" placeholder="Model" fluid onChange={this.handleChange}/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Input name="year" label="Year" type="number" placeholder={CURRENT_YEAR} fluid onChange={this.handleChange}/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Input name="zipCode" label="Zip Code" type="number" placeholder="Zip Code" fluid onChange={this.handleChange}/>
                </Grid.Column>

                <Grid.Column>
                  <Input name="priceMin" label="$" type="number" placeholder="Min" fluid onChange={this.handleChange}/>
                </Grid.Column>
                <Grid.Column>
                  <Input name="priceMax" label="$" type="number" placeholder="Max" fluid onChange={this.handleChange}/>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Form.Button fluid >Search</Form.Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </div>
        <ResultsComponent />
      </div>
    )
  }
}
