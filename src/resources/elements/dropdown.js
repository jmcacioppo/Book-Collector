import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const Dropdown = ({ options, setSelectedBook }) => {
  let inputElement = '';
  const renderedOptions = options.map((title, i) => <option key={i}>{title}</option>);
  
  const setValue = () => setSelectedBook(inputElement.value);
  
  return (
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl onChange={setValue} inputRef={element => inputElement = element} componentClass="select">
        {renderedOptions}
      </FormControl>
    </FormGroup>
  );
}

export default Dropdown
