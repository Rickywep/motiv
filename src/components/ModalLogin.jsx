import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function ModalLogin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      Swal.fire({
        icon: "success",
        title: "Logueo exitoso",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "Campos vacios o incorrectos",
      });
    }
  };

  return (
    <>
      <Button className="color-celeste-claro border-0" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="fondo-titulo">
          <Modal.Title className="text-white" >MotivWork</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            ref={form}
            noValidate
            validated={validated}
            onSubmit={sendEmail}
            className="mx-auto form mb-5 p-2 "
          >
            <div>
              <div className="card-body">
                <Row>
                  <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label className="mt-3 ">Email</Form.Label>
                    <Form.Control type="email" required name="email" placeholder="Ingresar su email"/>
                    <Form.Control.Feedback type="invalid">
                      Ingrese su Email por favor.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="mt-3">Password</Form.Label>
                    <Form.Control type="password" required name="contra" placeholder="ingrese su password" />
                    <Form.Control.Feedback type="invalid">
                      Ingrese su contraseña por favor.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </div>
            </div>

            <div className="d-flex justify-content-center ">
              <Button
                className=" text-white p-2 color-boton-modal border-0"
                size="sm"
                type="submit"
                value="Send"
              >
                <b>Iniciar sesión</b>
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
