import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderDropdownOptions = this.props.options.map((title, i) => <MenuItem key={i}>{title}</MenuItem>);
  }
  
  render() {
    return (
      <ButtonToolbar>
        <DropdownButton
          title={this.props.title}
          id={`dropdown`}>
          {this.renderDropdownOptions}
        </DropdownButton>
      </ButtonToolbar>
    );
  }
}

export default DropdownComponent
