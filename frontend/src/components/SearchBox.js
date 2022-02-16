import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const keywordToNavigate = keyword
    setKeyword('')
    if (keywordToNavigate.trim()) {
      navigate(`/search/${keywordToNavigate}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col sm={9} className='my-1'>
          <Form.Control
            type='text'
            name='q'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
            className=' shadow-sm ml-sm-5 mr-sm-5'
          ></Form.Control>
        </Col>
        <Col className='my-1'>
          <div className='d-grid gap-2'>
            <Button
              type='submit'
              variant='outline-success'
              size='lg'
              className='shadow-sm rounded p-2'
            >
              <i className='fa-solid fa-magnifying-glass'></i>
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
