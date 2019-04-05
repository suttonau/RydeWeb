import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const MENU_ITEMS = {
	FIND: "find",
	RENT: "rent",
	SELL: "sell",
	BUY: "buy"
};
export default class MenuComponent extends Component {
	state = {
		activeItem: ""
	};

	handleActiveItem = (e, { name }) => this.setState({ activeItem: name });
	render() {
		let { activeItem } = this.state;
		return (
			<Menu inverted size="huge" stackable>
				<Menu.Item onClick={this.handleActiveItem}>[Logo] Ryde</Menu.Item>

				<Menu.Menu position="right" stackable>
					<Menu.Item
						name={MENU_ITEMS.FIND}
						onClick={this.handleActiveItem}
						active={activeItem === MENU_ITEMS.FIND}
					>
						Find
					</Menu.Item>
					<Menu.Item
						name={MENU_ITEMS.RENT}
						onClick={this.handleActiveItem}
						active={activeItem === MENU_ITEMS.RENT}
					>
						Rent
					</Menu.Item>
					<Menu.Item
						name={MENU_ITEMS.SELL}
						onClick={this.handleActiveItem}
						active={activeItem === MENU_ITEMS.SELL}
					>
						Sell
					</Menu.Item>
					<Menu.Item
						name={MENU_ITEMS.BUY}
						onClick={this.handleActiveItem}
						active={activeItem === MENU_ITEMS.BUY}
					>
						Buy
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}
