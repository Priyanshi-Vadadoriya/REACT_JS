import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, InputGroup, FormControl, Button, FormCheck } from 'react-bootstrap';



function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        subscribe: false,
      });
    
      const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: inputValue,
        }));
    
        // Validation logic (you can customize this according to your requirements)
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: validateField(name, inputValue),
        }));
      };
    
      const validateField = (name, value) => {
        switch (name) {
          case 'firstName':
          case 'lastName':
            return value.trim() === '' ? 'This field is required.' : '';
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
		<div class="breadcrumb-section breadcrumb-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 text-center">
						<div class="breadcrumb-text">
							<p>Register</p>
							<h1>Sign-up</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end breadcrumb section */}

        
        <Container fluid>
      <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

      <Card className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <CardBody className='p-5 text-center'>
          <h2 className="fw-bold mb-5">Sign up now</h2>

          <form onSubmit={handleSubmit}>
            <Row>
              <Col md='6'>
                <InputGroup className='mb-4'>
                  <FormControl
                    placeholder='First name'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
              </Col>

              <Col md='6'>
                <InputGroup className='mb-4'>
                  <FormControl
                    placeholder='Last name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
              </Col>
            </Row>

            <InputGroup className='mb-4'>
              <FormControl
                placeholder='Email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </InputGroup>
            {errors.email && <div className="text-danger">{errors.email}</div>}

            <InputGroup className='mb-4'>
              <FormControl
                placeholder='Password'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </InputGroup>
            {errors.password && <div className="text-danger">{errors.password}</div>}

            <div className='d-flex justify-content-center mb-4'>
              <FormCheck
                type='checkbox'
                label='Subscribe to our newsletter'
                name='subscribe'
                checked={formData.subscribe}
                onChange={handleChange}
              />
            </div>

            <Button type='submit' className='w-100 mb-4' size='md'>
              Sign up
            </Button>
          </form>

          <div className="text-center">
            <p>or sign up with:</p>

            <Button variant='link' className='mx-3' style={{ color: '#1266f1' }}>
              <i className="fab fa-facebook-f"></i>
            </Button>

            <Button variant='link' className='mx-3' style={{ color: '#1266f1' }}>
              <i className="fab fa-twitter"></i>
            </Button>

            <Button variant='link' className='mx-3' style={{ color: '#1266f1' }}>
              <i className="fab fa-google"></i>
            </Button>

            <Button variant='link' className='mx-3' style={{ color: '#1266f1' }}>
              <i className="fab fa-github"></i>
            </Button>
          </div>
        </CardBody>
      </Card>
    </Container>

    </>
  );
}

export default Signup;