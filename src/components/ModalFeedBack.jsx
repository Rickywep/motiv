import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useRef } from "react";
import axios from "axios";

export default function ModalFeedBack() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const form = useRef();

  // state de Feeds
  const [feed, setFeed] = useState({
    colega: "",
    categoria: "",
    contenido: "",
  });

  //Extraer los valores
  const { colega, categoria, contenido } = feed;

  // Crear contenido
  const crearFeedBacks = async () => {
    await axios.post("http://localhost:4000/api/feedbacks", {
      colega,
      categoria,
      contenido,
    });
  };

  // capturar los input del usuario
  const handleChange = (e) => {
    setFeed({
      ...ModalFeedBack,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      Swal.fire({
        icon: "success",
        title: "FeedBack enviado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      crearFeedBacks();

      //Reiniciar el form
      setFeed({
        colega: "",
        categoria: "",
        contenido: "",
      });
      setValidated(false); 
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
                <Form.Label>A quien va?</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  required
                  name="colega"
                  value={colega}
                  placeholder="Buscar colega"
                />
                <Form.Label
                  onChange={handleChange}
                  className="mt-2"
                  controlId="floatingSelect"
                  label="Works with selects"
                >
                  Que?
                  <Form.Select
                    onChange={handleChange}
                    name="opciones"
                    required
                    className="mt-2 mb-1 modalOptionResponsive"
                    aria-label="Floating label select example"
                    
                  >
                    <option value={categoria}>BUEN TRABAJO</option>
                    <option value={categoria}>DIVERTIDO</option>
                    <option value={categoria}>AMABLE</option>
                  </Form.Select>
                </Form.Label>
                <Form.Label className="mt-2 mb-1">
                  Por que?
                  <Form.Control
                    onChange={handleChange}
                    required
                    name="contenido"
                    value={contenido}
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
