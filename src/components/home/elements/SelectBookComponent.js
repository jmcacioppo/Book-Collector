import React from 'react';
import DropdownComponent from "../../../resources/elements/DropdownComponent";

class SelectBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = ['Example 1', 'Example 2', 'Example 3'];

    return <DropdownComponent title={'Select Book'} options={options}></DropdownComponent>
  }
}

export default SelectBook;
