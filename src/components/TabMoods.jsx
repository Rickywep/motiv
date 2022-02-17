import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Table } from "react-bootstrap";
import Scrollbars from "react-custom-scrollbars";
import TablaMood from "./TablaMood";
import {
  VictoryPie,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
} from "victory";

export const TabMoods = () => {
  const [moods, setMoods] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:4000/api/moods");
      setMoods(response.data.moods);
    };

    getUsers();
  }, []);

  const polaridades = moods.map((mood) => mood.polaridad);

  let counterPolaridades = polaridades.map((mood) => {
    return { mood, count: 0 };
  });

  counterPolaridades.map((countPol, i) => {
    const actualSpecLength = polaridades.filter(
      (mood) => mood === countPol.mood
    ).length;
    countPol.count = actualSpecLength;
  });

  let set = new Set(counterPolaridades.map(JSON.stringify));
  let arrSinDuplicaciones = Array.from(set).map(JSON.parse);

  const anonimos = moods.map((mood) => mood.anonimo);

  let counterAnonimos = anonimos.map((anon) => {
    return { anon, count: 0 };
  });

  counterAnonimos.map((countAnon) => {
    const actualSpecLength = anonimos.filter(
      (anon) => anon === countAnon.anon
    ).length;
    countAnon.count = actualSpecLength;
  });

  let setAnon = new Set(counterAnonimos.map(JSON.stringify));
  let anonSinDuplicaciones = Array.from(setAnon).map(JSON.parse);

  const anonBar = anonSinDuplicaciones.map((anon) => {
    return {
      x: anon.anon ? "Si" : "No",
      y: anon.count,
      label: anon.anon ? anon.count + " Anonimos" : anon.count + " No Anonimos",
    };
  });

  const conceptos = moods.map((mood) => mood.palabra_concepto);

  let counterConceptos = conceptos.map((concept) => {
    return { concept, count: 0 };
  });

  counterConceptos.map((countConcept) => {
    const actualSpecLength = conceptos.filter(
      (concept) => concept === countConcept.concept
    ).length;
    countConcept.count = actualSpecLength;
  });

  let setConcept = new Set(counterConceptos.map(JSON.stringify));
  let conceptsSinDuplicaciones = Array.from(setConcept).map(JSON.parse);
  const anonConcept = conceptsSinDuplicaciones.map((concept, i) => {
    return {
      x: i,
      y: concept.count,
      label: concept.concept + ": " + concept.count,
    };
  });

  return (
    <div className="mt-5 p-5 d-flex  justify-content-center  ">
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={3}>
              <VictoryPie
                colorScale={["tomato", "orange", "gold", "violet", "navy"]}
                data={arrSinDuplicaciones.map((mood) => ({
                  x: mood.mood,
                  y: mood.count,
                }))}
              />
            </Col>
            <Col xs={1}>
              {arrSinDuplicaciones.map((mood) => (
                <ul>
                  <li>
                    {mood.mood} : {mood.count}
                  </li>
                </ul>
              ))}
            </Col>
            <Col xs={3}>
              <VictoryChart theme={VictoryTheme.grayscale} domainPadding={100}>
                <VictoryBar
                  style={{ data: { fill: "#c43a31" } }}
                  data={anonBar}
                />
              </VictoryChart>
            </Col>
            <Col>
              <VictoryChart
                horizontal
                theme={VictoryTheme.grayscale}
              >
                <VictoryBar
                  style={{ data: { fill: "green" } }}
                  data={anonConcept}
                />
              </VictoryChart>
            </Col>
          </Row>
        </Col>
        <Scrollbars className="scroll-usuarios">
          <Table responsive bordered className="tabla">
            <thead>
              <tr>
                <th>Anonimo</th>
                <th>Concepto</th>
                <th>Polaridad</th>
                <th>Contenido</th>
              </tr>
            </thead>
          </Table>
          {moods.map((mood) => (
            <TablaMood mood={mood} key={mood._id} />
          ))}
        </Scrollbars>
      </Row>
    </div>
  );
};
