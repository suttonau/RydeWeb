import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import './styles/Search.css'
const CURRENT_YEAR = new Date().getFullYear();
export default class SearchComponent extends Component {
	render() {
		return (
			<div className="search-container">
				<Form>
					<Form.Group>
						<Form.Input label="Make" placeholder="Make"/>
						<Form.Input label="Model" placeholder="Model"/>
						<Form.Input label="Year" type="number" placeholder={CURRENT_YEAR}/>
					</Form.Group>
					<Form.Group>
						<Form.Input label="Zip Code" placeholder="Zip Code" />
						
					</Form.Group>
					<Form.Button>Submit</Form.Button>
				</Form>
			</div>
		);
	}
}
