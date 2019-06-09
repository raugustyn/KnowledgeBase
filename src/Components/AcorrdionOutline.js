import React, { Component } from 'react';
import { Accordion, Card, Button } from "react-bootstrap"

export default class AcorrdionOutline extends Component {

  render() {
      return (
          <div className="App">
              <div className="row">
                  <div className="col-md-2">
                      <Accordion defaultActiveKey="0">
                          <Card>
                              <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                      Operators
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                  <Card.Body>Hello! I'm the body</Card.Body>
                              </Accordion.Collapse>
                          </Card>
                          <Card>
                              <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                      Rules
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="1">
                                  <Card.Body>
                                      <Accordion defaultActiveKey="0">
                                          <Card>
                                              <Card.Header>
                                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">Graphic
                                                      Colision</Accordion.Toggle>
                                              </Card.Header>
                                              <Accordion.Collapse eventKey="0">
                                                  <Card.Body>Point to Point</Card.Body>
                                              </Accordion.Collapse>
                                              <Accordion.Collapse eventKey="0">
                                                  <Card.Body>Point to Line</Card.Body>
                                              </Accordion.Collapse>
                                          </Card>
                                          <Card>
                                              <Card.Header>
                                                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                      Rendering Rule
                                                  </Accordion.Toggle>
                                              </Card.Header>
                                              <Accordion.Collapse eventKey="1">
                                                  <Card.Body>Terrain Ticks Rule</Card.Body>
                                              </Accordion.Collapse>
                                          </Card>
                                      </Accordion>
                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                      </Accordion>
                  </div>
              </div>
          </div>
      )}
}
