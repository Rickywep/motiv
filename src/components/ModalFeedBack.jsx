import React, { useState } from "react";
import { Button,Form, Modal} from "react-bootstrap";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function ModalFeedBack() {
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
        title: "Feed enviado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "Campos vacios o datos incorrectos",
      });
    }
  };

  return (
    <>
      <Button
        className="border-0 bg-transparent text-primary"
        onClick={handleShow}
      >
        FeedBack
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header className="fondo-titulo" closeButton>
          <Modal.Title className="text-white">FeedBack</Modal.Title>
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
                <Form.Label  >A quien va?</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="colega"
                  placeholder="Buscar colega"
                />
                <Form.Label
                  className="mt-2"
                  controlId="floatingSelect"
                  label="Works with selects"
                >
                  Que?
                  <Form.Select
                    name="opciones"
                    required
                    className="mt-2 mb-1 modalOptionResponsive"
                    aria-label="Floating label select example"
                  >
                    <option value="1">Buen trabajo</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Label>
                <Form.Label className="mt-2 mb-1">
                  Por que?
                  <Form.Control
                    required
                    name="comentario "
                    className="mt-2 modalResponsive"
                    type="text"
                    as="textarea"
                  />
                </Form.Label>
              </div>
            </div>

            <div className="d-flex justify-content-end  me-3 mt-2 ">
              <Button
                className=" text-white p-2 color-boton-modal border-0"
                size="sm"
                type="submit"
                value="Send"
              >
                <b>Enviar FeedBack</b>
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
