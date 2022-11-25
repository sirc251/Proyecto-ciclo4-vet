import React, { startTransition } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";
//import { Form, Container, Button, Row, Col } from "react-bootstrap/lib/Navbar";

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario: "", pass: "" };
  }
  iniciarSesion() {
    alert("usuario: ${this.state.usuario} - password:${this.state.pass}");
  }

  render() {
    return (
      <Container id="login-container" style={{ marginTop: 200 }}>
        <Row>
          <Col>
            <Row>
              <h2>Iniciar sesión</h2>
            </Row>
            <Col
              sm="12"
              xs="12"
              md={{ span: 4, offset: 4 }}
              lg={{ span: 4, offset: 4 }}
              xl={{ span: 4, offset: 4 }}
            >
              <Form className="form-label">
                <Form.Group>
                  <Form.Label style={{ float: "left " }}>Usuario</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group>
                  <Form.Label style={{ float: "left" }}>Contraseña</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button
                  variant="primary"
                  style={{ marginTop: 20, width: "100%" }}
                >
                  Iniciar sesión
                </Button>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
