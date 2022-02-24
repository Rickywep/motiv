import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { ConceptWords } from "../components/ConceptWords";
import { GraficAnon } from "../components/GraficAnon";
import { GraficMoods } from "../components/GraficMoods";
import NavAdmin from "../components/NavAdmin";
import { TabMoods } from "../components/TabMoods";

export default function Moods() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const getMoods = async () => {
      const response = await axios.get("http://localhost:4000/api/moods");
      setMoods(response.data.moods);
    };

    getMoods();
  }, []);
  return (
    <div>
      <NavAdmin />
      <Container>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Moods" title="Moods">
            <TabMoods moods={moods} />
          </Tab>
          <Tab eventKey="home" title="Grafic Moods">
            <GraficMoods moods={moods} />
          </Tab>
          <Tab eventKey="anon" title="Anon">
            <GraficAnon moods={moods} />
          </Tab>
          <Tab eventKey="concept" title="Concept">
            <ConceptWords moods={moods} />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
