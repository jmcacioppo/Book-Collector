import React from 'react';
import DropdownComponent from "../../../resources/elements/DropdownComponent";

const SelectBook = ({ options, setSelectedBook }) => <DropdownComponent title={'Select Book'} options={options} setSelectedBook={setSelectedBook}></DropdownComponent>

export default SelectBook;
