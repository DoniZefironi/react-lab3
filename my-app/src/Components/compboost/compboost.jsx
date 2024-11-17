import React from 'react';
import { Container, Row, Col, Badge, Card, ListGroup } from 'react-bootstrap';

const FiveComponents = () => {
    return (
        <Container>
            <Row className="my-4">
                <Col md={4}>
                    <Badge bg="primary" className="mb-3">Badge 1</Badge>
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
                    <ListGroup className="mb-3">
                        <ListGroup.Item variant="secondary">List Item 1</ListGroup.Item>
                        <ListGroup.Item variant="secondary">List Item 2</ListGroup.Item>
                        <ListGroup.Item variant="secondary">List Item 3</ListGroup.Item>
                    </ListGroup>
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