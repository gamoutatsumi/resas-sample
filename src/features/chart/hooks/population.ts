import React from 'react';

type PopulationContext = {
  population: Population;
  setPopulation: (population: Population) => void;
};

const defaultContext: PopulationContext = {
  population: {},
  setPopulation: () => {},
};

export const populationContext = React.createContext<PopulationContext>(defaultContext);

export function usePopulation(): PopulationContext {
  const [population, setPop] = React.useState<Population>({});
  function setPopulation(pop: Population) {
    setPop(pop);
  }
  return { population, setPopulation };
}
