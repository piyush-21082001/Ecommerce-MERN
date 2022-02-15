import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'
import Meta from '../components/Meta'

const PaymentScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else if (
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.postalCode ||
      !shippingAddress.country
    ) {
      navigate('/shipping')
    }
  }, [navigate, userInfo, shippingAddress])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }
  return (
    <>
      <Meta title='Payment Method' />
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Form.Group>
            <Col>
              <Form.Check
                type='radio'
                label='Paypal or Credit Card'
                id='Paypal'
                name='paymentMethod'
                value='Paypal'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              {/* <Form.Check
              type='radio'
              label='Paytm'
              id='Paytm'
              name='paymentMethod'
              value='Paytm'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
            </Col>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default PaymentScreen
