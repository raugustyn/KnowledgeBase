import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import "./Colors.css"

export default class Colors extends Component {

  render() {

    return (
      <div>
      <div className="bs-docs-header">
        <h1>Colors</h1>
        <p>
          Think in color names!
        </p>
      </div>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card>
              <CardBody>
                <CardTitle>Colors</CardTitle>
                <div>Think in color names!</div>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}
