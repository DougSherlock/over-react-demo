import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

export default class AccordionSample extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Accordion Component</h3>
                </div>
                <div>
                    <a href="https://react-bootstrap.github.io/components/accordion/">https://react-bootstrap.github.io/components/accordion/</a>
                </div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}
