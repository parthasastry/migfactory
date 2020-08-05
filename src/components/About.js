import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export class About extends Component {
    render() {
        const intro = 'Migration Dashboard is a mechanism to provide visibility into plan and progress of migrating on-premises/other cloud servers to AWS. It is a one stop shop for leadership, teams and other stakeholders to view the status. There are multiple views built into the dashboard for easy consumption of the information'
       
        return (
            <Container text>
                <Header as='h2'>About Migration Dashboard</Header>
                <p>{intro}</p>
                <div class="ui message">
                    <div class="header">
                        Servers
                    </div>
                    <ul class="list">
                        <li>Burnup of the servers migrated over a period of time. This is a cumulative number of servers planned and migrated</li>
                        <li>Bar chart indicating the plan applications vs actual applications migrated for each cutover date</li>
                    </ul>
                </div>
                <div class="ui message">
                    <div class="header">
                        Applications
                    </div>
                    <ul class="list">
                        <li>Burnup of the applications migrated over a period of time. This is a cumulative number of applications planned and migrated</li>
                        <li>Bar chart indicating the plan servers vs actual servers migrated for each cutover date</li>
                    </ul>
                </div>
                <div class="ui message">
                    <div class="header">
                        Search
                    </div>
                    <ul class="list">
                        <li>Migration inventory can be searched for a specific Application or Server</li>
                    </ul>
                </div>
                <div class="ui message">
                    <div class="header">
                        Contacts
                    </div>
                    <ul class="list">
                        <li>List of Migration team members and their contacts</li>
                    </ul>
                </div>
            </Container>
        )
    }
}

export default About
