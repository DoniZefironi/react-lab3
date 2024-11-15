import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const FiveComponents = () => {
    return (
        <Container>
            <Row className="my-4">
                <Col md={4}>
                    <Button variant="primary" className="mb-3">Button 1</Button>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '100%' }} className="mb-3">
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                This is a card component from Bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <p className="mb-3">Text 1</p>
                </Col>
            </Row>
            <Row className="my-4">
                <Col md={4}>
                    <Card style={{ width: '100%' }} className="mb-3">
                        <Card.Body>
                            <Card.Title>Card 2</Card.Title>
                            <Card.Text>
                                Another card component with some text.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Button variant="secondary" className="mb-3">Button 2</Button>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '100%' }} className="mb-3">
                        <Card.Body>
                            <Card.Title>Card 3</Card.Title>
                            <Card.Text>
                                This is the third card component.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FiveComponents;