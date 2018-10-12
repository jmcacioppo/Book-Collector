import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const DropdownComponent = ({ options }) => {
  let inputElement = '';
  let renderOptions = options.map((title, i) => <option key={i}>{title}</option>);

  let setValue = () => {
    // this.props.value = this.inputElement.value;
    console.log(inputElement.value);
  }
  
  return (
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl onChange={setValue} inputRef={element => inputElement = element} componentClass="select">
        {renderOptions}
      </FormControl>
    </FormGroup>
  );
}

export default DropdownComponent
