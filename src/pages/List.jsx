import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { getAllStudentsAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function List() {
  const [allStudents, setAllStudents] = useState([])

  const getAllStudents = async () => {
    try {
      const result = await getAllStudentsAPI()
      console.log(result);
      if (result.status == 200) {
        setAllStudents(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllStudents()
  }, [])

  return (
    <>
      <Container fluid>
        <Row className="mt-5">
          <Col>
            <h3 className='text-primary text-center fw-bolder'>Student Details</h3>
            <Table striped bordered hover>
              <thead>
                <tr className='table-primary'>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>E-mail</th>
                  <th>Mobile</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Course Selected</th>
                </tr>
              </thead>
              <tbody>
                {allStudents?.length > 0 &&
                  allStudents.map((students, index) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{students.firstname}</td>
                      <td>{students.lastname}</td>
                      <td>{students.address}</td>
                      <td>{students.email}</td>
                      <td>{students.mobile}</td>
                      <td>{students.dateOfBirth}</td>
                      <td>{students.gender}</td>
                      <td>{students.course}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Link to={'/register'}>
              <Button variant="outline-primary rounded" type="submit">
              <i className="fa-solid fa-chevron-left pe-1"></i>Back</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default List