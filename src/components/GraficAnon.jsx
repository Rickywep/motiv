import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

export const GraficAnon = ({ moods }) => {
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
  return (
    <VictoryChart theme={VictoryTheme.grayscale} domainPadding={100}>
      <VictoryBar style={{ data: { fill: "#c43a31" } }} data={anonBar} />
    </VictoryChart>
  );
};
