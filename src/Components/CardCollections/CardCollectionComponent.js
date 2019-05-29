import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';

import BaderBoard from "../../Boards/BaderBoard/BaderBoard"

export default class CardCollectionComponent extends Component {

    STYLES = [
        { caption: "List", disabled: true },
        { caption: "Details", disabled: true },
        { caption: "Tree View", disabled: true },
        { caption: "Bader View", disabled: false },
        { caption: "Organizational Chart", disabled: true }
    ]

    TAB_CLASSNAMES = ['', 'active']

    constructor(props)
    {
        super(props)
        this.state = {
            cards: this.props.cards,
            selectedIndex: (this.props.selectedIndex ? this.props.selectedIndex : 0),
            activeTab: this.props.activeTab
        };
    }


    toggleTab(newTab) {
        if (this.state.activeTab !== newTab) {
          this.setState({ activeTab: newTab });
        }
    }

    switchToItem(index) {
        this.setState({ selectedIndex: index })
    }

    render() {
        let cardBoard

        if (this.state.selectedIndex == 3) {
            cardBoard = ( <BaderBoard /> )
        }
        return (
            <div className="CardCollection">
                <div>
                    <Nav tabs>
                      <NavItem>
                        <NavLink className={this.TAB_CLASSNAMES[this.state.activeTab == '0']} onClick={ this.toggleTab.bind(this, '0') }>Display Style</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className={this.TAB_CLASSNAMES[this.state.activeTab == '1']} onClick={ this.toggleTab.bind(this, '1') }>Details</NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="0">
                        <Row>
                          <Col sm="12">
                            <div>
                                { this.STYLES.map((item, index) => <Button key={index} color="primary" onClick={this.switchToItem.bind(this, index)} disabled={item.disabled}>{ item.caption }</Button>)}
                            </div>
                            CardCollectionComponent switched to '{this.STYLES[this.state.selectedIndex].caption}'<br/>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="1">
                          ahoj
                      </TabPane>
                    </TabContent>
                </div>
                { cardBoard }
            </div>
        )
    }
}

CardCollectionComponent.defaultProps = {
    selectedIndex: 3,
    activeTab: '1'
}

