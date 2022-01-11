import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function ModalMood() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState({});

  const [validated, setValidated] = useState(false);
  const form = useRef();

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      Swal.fire({
        icon: "success",
        title: "Mood enviado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "campos vacios o datos incorrectos",
      });
    }
  };

  return (
    <>
      <Button
        className="border-0 bg-transparent text-primary"
        onClick={handleShow}
      >
        New Mood
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header className="fondo-titulo" closeButton>
          <Modal.Title className="text-white">Mood</Modal.Title>
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
                <Form.Label className="mt-2 mb-2">
                  {" "}
                  Como te sientes hoy?
                  <Form.Control
                    onChange={handleChange}
                    required
                    name="comentario"
                    className="mt-2 modalResponsive"
                    type="text"
                    as="textarea"
                  />
                </Form.Label>
                <Form.Group className="mt-2" controlId="formBasicCheckbox">
                  <Form.Check onChange={handleChange} type="checkbox" name="checkbox" label="Anónimo" />
                </Form.Group>
              </div>
            </div>

            <div className="d-flex justify-content-end me-3 mt-2 ">
              <Button
                className=" text-white p-2 color-boton-modal border-0"
                size="sm"
                type="submit"
                value="Send"
              >
                <b>Enviar</b>
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
