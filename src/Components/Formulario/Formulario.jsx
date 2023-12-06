import React from "react";
import { Container, Form } from 'react-bootstrap';

import Boton from "../Boton/Boton"
const LoginForm = ()=> {
    return(
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your username with anyone else.
              </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Boton  label = {"LOGIN"}></Boton>
          </Form>
        </div>
      </Container>);

}

export default LoginForm;