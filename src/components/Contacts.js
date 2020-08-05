import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export class Contacts extends Component {
    render() {
        return (
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Organization</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>XXX</Table.Cell>
                        <Table.Cell>John.Lilki@xxx.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>XXX</Table.Cell>
                        <Table.Cell>John.Lilki@xxx.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>XXX</Table.Cell>
                        <Table.Cell>John.Lilki@xxx.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>XXX</Table.Cell>
                        <Table.Cell>John.Lilki@xxx.com</Table.Cell>
                    </Table.Row>
                </Table.Body>

            </Table>
        )
    }
}

export default Contacts
