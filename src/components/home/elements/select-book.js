import React from 'react';
import Dropdown from '../../../resources/elements/dropdown';

const SelectBook = ({ options, setSelectedBook }) => (
  <Dropdown
    title={'Select Book'}
    options={options}
    setSelectedBook={setSelectedBook}
  />
);

export default SelectBook;
