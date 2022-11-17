import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';


export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (  
          <Container id="login-container">
             <Form>
        <Form.Group >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group >
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
          </Container>
          );
    }
}
 
