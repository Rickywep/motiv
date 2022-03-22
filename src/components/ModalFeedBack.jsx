import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import SearchUser from "./SearchUser";
import Swal from "sweetalert2";

export default function ModalFeedBack({ token }) {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [feedback, setFeedback] = useState({
    categoria: "Buen trabajo",
    contenido: "",
  });
  const [colega, setColega] = useState("");

  const onChangeFeedback = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      e.stopPropagation();
      Swal.fire({
        icon: "success",
        title: "Feedback creado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      createFeedback({ ...feedback, colega: colega[0]._id });    
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "campos vacios o datos incorrectos",
      });
    }
  };


  const createFeedback = (feedback) => {
    return axios
      .post("http://localhost:4000/api/feedbacks", feedback, {
        headers: { "x-auth-token": token },
      })
      .then(window.location.replace("/"));
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
          <Form onSubmit={onSubmit} className="mx-auto form mb-5 p-2 ">
            <div>
              <div className="card-body">
                <Form.Label>A quien va?</Form.Label>
                <SearchUser token={token} setColega={setColega}  />

                <Form.Label
                  onChange={onChangeFeedback}
                  className="mt-2"
                  label="Works with selects"
                >
                  Que?
                  <Form.Select
                    onChange={onChangeFeedback}
                    name="opciones"
                    required
                    className="mt-2 mb-1 modalOptionResponsive"
                    aria-label="Floating label select example"
                  >
                    <option>Buen trabajo</option>
                    <option>Amable</option>
                    <option>Divertido</option>
                  </Form.Select>
                </Form.Label>
                <Form.Label className="mt-2 mb-1">
                  Por que?
                  <Form.Control
                    onChange={onChangeFeedback}
                    required
                    name="contenido"
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
