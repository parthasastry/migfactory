import React, { Component } from 'react'
import { Search, Container, Table } from 'semantic-ui-react'
import * as d3 from 'd3';
import inventoryData from '../inventory.csv'

const initialState = { inventory: [], results: []};

export class Inventory extends Component {
    constructor(props){
        super(props);
        this.state = initialState;
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }
    
    componentDidMount() {
        d3.csv(inventoryData).then((data) => {
            console.log(data)
            this.setState({inventory: data, results: data})
        })
    };

    handleSearchChange(e){
        console.log(e.target.value)
        const text = e.target.value
        if (text.length > 1) {
            console.log(text)
            const newResults = this.state.inventory.filter(function(d){
                return d.Server_Name.includes(text) || d.App.includes(text)
            })
            this.setState({results: newResults})
        } else {
            this.setState({results: this.state.inventory})
        }
    }

    render() {
        const inventoryData = this.state.results.map((d, i) => {
            return <Table.Row key={i}>
                <Table.Cell>{d['Server_Name']}</Table.Cell>
                <Table.Cell>{d['App']}</Table.Cell>
                <Table.Cell>{d['Wave End/Migration\nDate'].split(' ')[0]}</Table.Cell>
                <Table.Cell>{d['Migration Status']}</Table.Cell>
                <Table.Cell>{d['AD Migration Status']}</Table.Cell>
            </Table.Row>
        })

        return (
            <Container>
                <Search 
                    placeholder="Server or App"
                    onSearchChange={this.handleSearchChange}
                />

                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Server</Table.HeaderCell>
                            <Table.HeaderCell>Application</Table.HeaderCell>
                            <Table.HeaderCell>Cutover Date</Table.HeaderCell>
                            <Table.HeaderCell>Phase</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                           { inventoryData }
                    </Table.Body>
                </Table>
            </Container>

        )
    }
}

export default Inventory
