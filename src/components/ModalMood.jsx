import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

export default function ModalMood({ token }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mood, setMood] = useState("");
  const [anon, setAnon] = useState(false);

  const queryApy = async () => {
    await axios
      .post(
        `https://api.meaningcloud.com/sentiment-2.1?key=82a16351d0c7666c340dbb2c5a66d4e7&of=json&txt=${mood}&lang=es`
      )
      .then((response) => {
        let palabraConcepto;
        if (response.data.sentimented_concept_list.length === 0) {
          palabraConcepto = "ninguna";
        } else {
          palabraConcepto = response.data.sentimented_concept_list[0].form;
        }
        const polaridad = response.data.score_tag;

        createMood(polaridad, palabraConcepto);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChangeMood = (e) => {
    setMood(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    queryApy();
  };

  const createMood = async (polaridad, palabraConcepto) => {
    try {
      await axios.post(
        "http://localhost:4000/api/moods",
        {
          contenido: mood,
          anonimo: anon,
          polaridad: polaridad,
          palabra_concepto: palabraConcepto,
        },
        {
          headers: { "x-auth-token": token },
        }
      );
    } catch (error) {
      alert(error.response.data.msg);
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
            noValidate
            onSubmit={onSubmit}
            className="mx-auto form mb-5 p-2 "
          >
            <div>
              <div className="card-body">
                <Form.Label className="mt-2 mb-2">
                  {" "}
                  Como te sientes hoy?
                  <Form.Control
                    onChange={onChangeMood}
                    required
                    name="contenido"
                    className="mt-2 modalResponsive"
                    type="text"
                    as="textarea"
                  />
                </Form.Label>
                <Form.Group className="mt-2" controlId="formBasicCheckbox">
                  <Form.Check
                    onChange={onChangeMood}
                    type="checkbox"
                    name="anonimo"
                    label="Anónimo"
                    onChange={() => setAnon(!anon)}
                  />
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
