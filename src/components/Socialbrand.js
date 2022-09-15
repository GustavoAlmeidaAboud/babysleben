import React from 'react';
import {MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Socialbrand() {
  return (
    <MDBBtn style={{ backgroundColor: '#55acee' }} href='#'>
      <MDBIcon className='me-2' fab icon='twitter' /> Twitter
    </MDBBtn>
  );
}