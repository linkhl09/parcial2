import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import Table from "react-bootstrap/Table";
import { FormattedMessage } from "react-intl";
import Graphic from "./graphic";

function PokemonList() {
  
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("pokemon") !== null) {
        setPokemon(localStorage.getItem("pokemon"));
      }
    } else {
      let URL_POK = (navigator.language || navigator.userLanguage).startsWith(
        "es"
      )
        ? "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json"
        : "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json";
      fetch(URL_POK)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
          localStorage.setItem("pokemon", data);
        });
    }
  }, []);

  return (
    <div class="container">
      <Table striped bordered hover>
        <thead class="thead-dark">
          <th scope="col">#</th>
          <th scope="col">
            <FormattedMessage id="Image" />
          </th>
          <th scope="col">
            <FormattedMessage id="Name" />
          </th>
          <th scope="col">
            <FormattedMessage id="Description" />
          </th>
          <th scope="col">
            <FormattedMessage id="Height" />
          </th>
          <th scope="col">
            <FormattedMessage id="Weight" />
          </th>
          <th scope="col">
            <FormattedMessage id="Type" />
          </th>
        </thead>
        <tbody class="tbody">
          {pokemon.map( (e, i) => 
            <Pokemon key={i} pokemon={e} />
          )}
        </tbody>
      </Table>
      <h1>Info</h1>
      <Graphic pokemon={pokemon} />
    </div>
  );
}

export default PokemonList;
