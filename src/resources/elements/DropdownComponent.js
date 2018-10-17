import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const DropdownComponent = ({ options, setSelectedBook }) => {
  let inputElement = '';
  let renderedOptions = options.map((title, i) => <option key={i}>{title}</option>);
  
  let setValue = () => setSelectedBook(inputElement.value);
  
  return (
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl onChange={setValue} inputRef={element => inputElement = element} componentClass="select">
        {renderedOptions}
      </FormControl>
    </FormGroup>
  );
}

export default DropdownComponent
