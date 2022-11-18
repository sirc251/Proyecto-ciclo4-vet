import React, { startTransition } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./login.css";
import { Form, Container, Button, Row, Col } from "react-bootstrap/lib/Navbar";

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
      <Container id="login-container">
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
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={() => {
                    this.iniciarSesion();
                  }}
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
