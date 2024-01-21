import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, FormCheck } from 'react-bootstrap';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validation logic (you can customize this according to your requirements)
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address.';
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters.' : '';
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    Object.keys(formData).forEach((name) => {
      newErrors[name] = validateField(name, formData[name]);
    });

    setErrors(newErrors);

    // Check if there are no errors before submitting the form
    if (Object.values(newErrors).every((error) => error === '')) {
      // Your form submission logic goes here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      {/* breadcrumb-section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Get 24/7 Support</p>
                <h1>Sign-up</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}

      <Container fluid className="p-3 my-5 h-custom">
        <Row>
          <Col col='10' md='6'>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </Col>

          <Col col='4' md='6'>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <Button variant='primary' className='me-2'>
                <i className="fab fa-facebook-f"></i>
              </Button>
              <Button variant='info' className='me-2'>
                <i className="fab fa-twitter"></i>
              </Button>
              <Button variant='primary' className='me-2'>
                <i className="fab fa-linkedin-in"></i>
              </Button>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <form onSubmit={handleSubmit}>
              <InputGroup className='mb-4'>
                <FormControl
                  label='Email address'
                  type='email'
                  size='lg'
                  id='formControlLg'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputGroup>
              {errors.email && <div className="text-danger">{errors.email}</div>}

              <InputGroup className='mb-4'>
                <FormControl
                  label='Password'
                  type='password'
                  size='lg'
                  id='formControlLg'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputGroup>
              {errors.password && <div className="text-danger">{errors.password}</div>}

              <div className="d-flex justify-content-between mb-4">
                <FormCheck type='checkbox' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <div className='text-center text-md-start mt-4 pt-2'>
                <Button variant='primary' className="mb-0 px-5" size='lg' type='submit'>
                  Login
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account? <a href="#!" className="link-danger">Register</a>
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signin;
