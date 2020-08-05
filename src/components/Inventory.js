import React, { Component } from 'react'
import { Container, Table } from 'semantic-ui-react'
import * as d3 from 'd3';
import inventoryData from '../inventory.csv'

const initialState = { isLoading: false, results: [], value: ''};

export class Inventory extends Component {
    constructor(props){
        super(props);
        this.state = initialState;

    }
    

    componentDidMount() {
        d3.csv(inventoryData).then((data) => {
            console.log(data)
            this.setState({results: data})
        })
    };

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
