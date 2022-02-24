import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { getFormatPolaridad } from "../helpers/formatPolaridad";

export const ConceptWords = ({ moods }) => {
  const moodsFiltered = moods.filter(
    (mood) => mood.palabra_concepto !== "ninguna"
  );

  const conceptoPolaridades = moodsFiltered.map((mood) => ({
    concepto: mood.palabra_concepto,
    polaridad: mood.polaridad,
  }));
  let set = new Set(conceptoPolaridades.map(JSON.stringify));
  let moodsSet = Array.from(set).map((item) => ({
    ...JSON.parse(item),
    count: 0,
  }));

  conceptoPolaridades.forEach(({ concepto, polaridad }) => {
    const mood = moodsSet.find(
      (item) => item.concepto === concepto && item.polaridad === polaridad
    );
    mood.count += 1;
  });

  return (
    <Table striped bordered hover className="bg-light" >
      <thead>
        <tr>
          <th>Palabra</th>
          <th>Polaridad</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {moodsSet.map((mood, i) => (
          <tr key={i}>
            <td>{mood.concepto}</td>
            <td>{getFormatPolaridad(mood.polaridad)}</td>
            <td>{mood.count}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
