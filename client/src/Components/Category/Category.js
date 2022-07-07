import React from 'react';
import {Form, Select} from 'react-bootstrap';
import { MDBInput, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

export default function Category() {
  return (
    <>  
    <MDBInput list ="category" name="category" className="mb-4" placeholder="Select Category" autoComplete='off'/>
    <datalist id="category">
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Books">Books</option>
        <option value="Sports">Sports</option>
        <option value="Others">Others</option>
    </datalist>

    </>
  );
}