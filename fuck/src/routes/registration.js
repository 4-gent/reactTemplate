import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol
  }
  from 'mdb-react-ui-kit';
import '../public/registration.css'
import Navigation from '../components/navbar';

export default function Registration() {
  return (
    <div>
    <nav>
        <Navigation />
    </nav>
    <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

