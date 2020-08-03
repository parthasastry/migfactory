import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    state = { activeItem: 'servers' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <nav className="navbar bg-primary">
                <h1>Migration Dashboard</h1>
                <ul>
                    <li>
                        <Link to="/">Servers</Link>
                    </li>
                    <li>
                        <Link to="/apps">Applications</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
