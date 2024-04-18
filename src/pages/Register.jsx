import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';

function Register() {
  const navigate = useNavigate()

  const [studentDetails, setStudentDetails] = useState({
    firstname: "", lastname: "", mobile: "", address: "", email: "", password: "", gender: "", dateOfBirth: "", course: ""
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    if (studentDetails.firstname && studentDetails.lastname && studentDetails.mobile && studentDetails.address && studentDetails.email && studentDetails.password && studentDetails.gender && studentDetails.dateOfBirth && studentDetails.course) {
      // api call
      try {
        const result = await registerAPI(studentDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success(`Welcome ${result.data.firstname}!!!`)
          setStudentDetails({ firstname: "", lastname: "", mobile: "", address: "", email: "", password: "", gender: "", dateOfBirth: "", course: "" })
          setTimeout(() => {
            navigate('/list')
          }, 2000)
        } else {
          toast.error(result.response.data)
          setTimeout(() => {
            setStudentDetails({ firstname: "", lastname: "", mobile: "", address: "", email: "", password: "", gender: "", dateOfBirth: "", course: "" })
          }, 2000)
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.warning('Please fill the form completely!!!')
    }
  }
  return (
    <>
      <Container>
        <Row className='mt-5 mb-5'>
          <Col lg={4}>
            <img className='img-fluid h-75' src="https://cdni.iconscout.com/illustration/premium/thumb/task-registration-2081679-1756042.png" alt="" />
            <Link to={'/'}>
              <Button variant="outline-primary rounded mt-5" size="lg" type="submit">
                <i className="fa-solid fa-chevron-left pe-1"></i>Go Back</Button>
            </Link>
          </Col>
          <Col lg={8}>
            <Container className='p-5 shadow bg-primary-subtle'>
              <h2 className='text-center fw-bold'>Apply As A Student <i className="fa-solid fa-user-graduate ps-2"></i></h2>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="firstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        value={studentDetails.firstname} onChange={e => setStudentDetails({ ...studentDetails, firstname: e.target.value })}
                        type="text"
                        placeholder="Enter your first name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="lastname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        value={studentDetails.lastname} onChange={e => setStudentDetails({ ...studentDetails, lastname: e.target.value })}
                        type="text"
                        placeholder="Enter your last name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="phone">
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control
                        value={studentDetails.mobile} onChange={e => setStudentDetails({ ...studentDetails, mobile: e.target.value })}
                        type="tel"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        value={studentDetails.address} onChange={e => setStudentDetails({ ...studentDetails, address: e.target.value })}
                        as="textarea"
                        placeholder="Enter your address"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        value={studentDetails.email} onChange={e => setStudentDetails({ ...studentDetails, email: e.target.value })}
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        value={studentDetails.password} onChange={e => setStudentDetails({ ...studentDetails, password: e.target.value })}
                        type="password"
                        placeholder="Enter your password"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="gender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        value={studentDetails.gender} onChange={e => setStudentDetails({ ...studentDetails, gender: e.target.value })}
                        as="select"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="dateOfBirth">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        value={studentDetails.dateOfBirth} onChange={e => setStudentDetails({ ...studentDetails, dateOfBirth: e.target.value })}
                        type="date"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3' controlId="course">
                      <Form.Label>Course</Form.Label>
                      <Form.Select
                        value={studentDetails.course} onChange={e => setStudentDetails({ ...studentDetails, course: e.target.value })}
                        as="select"
                        required
                      >
                        <option value="">Select a Course</option>
                        <option value="Biology">Biology</option>
                        <option value="Computer science">Computer Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Humanities">Humanities</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <div className='d-flex justify-content-end'>
                  <Button onClick={handleRegister} variant="outline-primary rounded-pill" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} transition={Zoom} />
    </>
  )
}

export default Register