import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

export default function Category() {
  return (

    <MDBDropdown >
      <MDBDropdownToggle tag='a' className='btn text-dark col-12 mx-auto' color ='light' >
        Category
      </MDBDropdownToggle>
      <MDBDropdownMenu className='col-18 mx-2'>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Action</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Another action</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}