import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import PokemonCardClassic from "./components/PokemonCardClassic";
import PokemonCardCompact from "./components/PokemonCardCompact";
import PokemonCardModern from "./components/PokemonCardModern";
import PokemonCardSimple from "./components/PokemonCardSimple";

const CustomDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  padding: 16px;
`;

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      setPokemonData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(pokemonData);

  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <CustomDiv>
        <PokemonCardClassic
          name={pokemonData?.name}
          weight={pokemonData?.weight}
          imageUrl={pokemonData?.sprites?.front_shiny}
        />
        <PokemonCardCompact
          name={pokemonData?.name}
          weight={pokemonData?.weight}
          imageUrl={pokemonData?.sprites?.back_shiny}
        />
        <PokemonCardModern
          name={pokemonData?.name}
          weight={pokemonData?.weight}
          imageUrl={pokemonData?.sprites?.front_default}
        />
        <PokemonCardSimple
          name={pokemonData?.name}
          weight={pokemonData?.weight}
          imageUrl={pokemonData?.sprites?.back_default}
        />
      </CustomDiv>
    </div>
  );
}

export default App;
