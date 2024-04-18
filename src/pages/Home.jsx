import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={6}>
            <h1 style={{ fontSize: '80px' }}><i className="fa-solid fa-user-graduate"></i> <span className='text-warning pe-1'>Edu</span>Guru</h1>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, in eos doloremque, laudantium alias ea laboriosam cumque cupiditate repellat vel tempora? Nemo minus numquam sed alias odio dolore officiis nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas beatae eveniet fuga accusamus pariatur eaque perspiciatis vel inventore nulla alias iste aut cum, veritatis, ipsum quod natus eligendi dicta?</p>
            <div className='d-flex justify-content-center align-items-center'>
              <h3>New Student? Click here to</h3>
              <Link to={'/register'} className='btn btn-primary fw-bold ms-3'>Register
                <i className="fa-solid fa-chevron-right fa-beat-fade ms-1"></i>
                <i className="fa-solid fa-chevron-right fa-beat-fade"></i>
                <i className="fa-solid fa-chevron-right fa-beat-fade"></i>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/online-education-2246489-1911561.png" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home