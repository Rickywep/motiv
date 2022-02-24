import React from "react";
import { Row, Table } from "react-bootstrap";
import Scrollbars from "react-custom-scrollbars";
import TablaMood from "./TablaMood";

export const TabMoods = ({ moods }) => {
  return (
    <div className="mt-5 p-5 d-flex  justify-content-center  ">
      <Row>
        <Scrollbars className="scroll-usuarios">
          <Table responsive striped bordered className="tabla bg-light">
            <thead>
              <tr>
                <th>Anonimo</th>
                <th>Concepto</th>
                <th>Polaridad</th>
                <th>Contenido</th>
              </tr>
            </thead>
            <tbody>
              {moods.map((mood) => (
                <TablaMood mood={mood} key={mood._id} />
              ))}
            </tbody>
          </Table>
        </Scrollbars>
      </Row>
    </div>
  );
};
