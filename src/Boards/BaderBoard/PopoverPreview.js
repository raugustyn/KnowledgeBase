import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./BaderBoard.css"

export default class PopoverPreview extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          <img alt={this.props.imageName} src={this.props.imageName} className="PreviewImage" />
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
              <img alt={this.props.imageName} src={this.props.imageName} />
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
