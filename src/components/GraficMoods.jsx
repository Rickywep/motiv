import React from "react";
import { Col, Row } from "react-bootstrap";
import { VictoryPie } from "victory";
import { getFormatPolaridad } from "../helpers/formatPolaridad";

export const GraficMoods = ({ moods }) => {
  const polaridades = moods.map((mood) => mood.polaridad);

  let counterPolaridades = polaridades.map((mood) => {
    return { mood, count: 0 };
  });

  counterPolaridades.forEach((countPol, i) => {
    const actualSpecLength = polaridades.filter(
      (mood) => mood === countPol.mood
    ).length;
    countPol.count = actualSpecLength;
  });

  let set = new Set(counterPolaridades.map(JSON.stringify));
  let arrSinDuplicaciones = Array.from(set).map(JSON.parse);

  return (
    <Row>
      <Col xs={8}>
        <VictoryPie
          padding={{ top: 80, bottom: 80 }}
          colorScale={["tomato", "orange", "gold", "violet", "navy", "green"]}
          data={arrSinDuplicaciones.map((mood) => ({
            label: getFormatPolaridad(mood.mood),
            y: mood.count,
          }))}
        />
      </Col>
      <Col xs={4}>
        {arrSinDuplicaciones.map((mood, i) => (
          <ul key={i}>
            <li>
              {getFormatPolaridad(mood.mood)} : {mood.count}
            </li>
          </ul>
        ))}
      </Col>
    </Row>
  );
};
