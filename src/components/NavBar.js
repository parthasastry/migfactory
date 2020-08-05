import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export class NavBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
   
    render() {
        const { activeItem } = this.state
        return (
            <Menu>
                <Menu.Item header>Migration Dashboard</Menu.Item>
                <Menu.Item
                    name='servers'
                    active={activeItem === 'servers'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/"
                >
                    Servers
                </Menu.Item>

                <Menu.Item
                    name='applications'
                    active={activeItem === 'applications'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/apps"
                >
                    Applications
                </Menu.Item>  
                <Menu.Item
                    name='search'
                    active={activeItem === 'search'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/search"
                >
                    Search
                </Menu.Item> 
                <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/about"
                >
                    About
                </Menu.Item> 
                <Menu.Item
                    name='contacts'
                    active={activeItem === 'contacts'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to="/contacts"
                >
                    Contacts
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavBar
