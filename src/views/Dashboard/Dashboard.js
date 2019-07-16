import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';


export default class Dashboard extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Row>


          <Col xs="12" sm="6" lg="3">
            <Card>
              <CardHeader>
                Bootstrap
                <div className="card-header-actions">
                  <Badge pill className="float-right">
                    <img style={{height: "18px"}} src="https://getbootstrap.com/favicon.ico" />
                  </Badge>
                </div>
              </CardHeader>
              <CardBody>

                <h4>Bootstrap</h4>
                <h6>The most popular HTML, CSS, and JS library in the world.</h6>
                <p>
                  Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.
                </p>
                <p>
                  Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.
                </p>
                <p>
                  <a href="https://getbootstrap.com/docs/4.3/examples/">Examples</a><br/>
                  <a href="https://getbootstrap.com/docs/4.3/components/alerts/">Components</a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                react
                <div className="card-header-actions">
                  <Badge pill className="float-right">
                    <img style={{height: "18px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
                  </Badge>
                </div>
              </CardHeader>
              <CardBody>

                <h4>react</h4>
                <h6>A JavaScript library for building user interfaces</h6>

                <p>
                  <a href="https://reactjs.org/">React Home</a>
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                reactstrap
                <div className="card-header-actions">
                  <Badge pill className="float-right"><img style={{height: "18px"}} src="http://reactstrap.github.io/assets/logo.png" /></Badge>
                </div>
              </CardHeader>
              <CardBody>

                <h4>reactstrap</h4>
                <h6>Easy to use React Bootstrap 4 components</h6>

                <p>
                  <a href="http://reactstrap.github.io/components/alerts/">Components Demo</a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col>

            <Card>
              <CardHeader>
                CoreUI for React
                <div className="card-header-actions">
                  <Badge pill className="float-right"><img style={{height: "18px"}} src="https://coreui.io/demo/img/brand/logo.svg" /></Badge>
                </div>
              </CardHeader>
              <CardBody>

                <h4>CoreUI</h4>
                <h6>Free Bootstrap Admin Template</h6>
                <p>
                The only Bootstrap Admin Template you need to create amazing user interfaces.

                CoreUI is an open source Bootstrap 4 based admin template.
                </p>
                <p>
                  <a href="https://coreui.io/demo/#main.html">Live Demo</a>
                </p>
              </CardBody>
            </Card>

          </Col>

        </Row>
      </div>
    );
  }
}
