/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import PokemonThumb from "./components/PokemonThumb";
import Header from "./components/Header";
import "./index.css";

const App = () => {
 const [allPokemons, setAllPokemons] = useState([]);
 const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

 // Função para buscar todos os pokémons
 const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    // Função para criar objeto de pokémon
    const createPokemonObject = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    };
    createPokemonObject(data.results);
 };

 useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 return (
    <div className="app-container">
      <Header />

      <h1>Pokedex PixelArt</h1>

      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((pokemon) => (
              // Use pokemon.id como chave
              <a key={pokemon.id}>
                <PokemonThumb
                 id={pokemon.id}
                 image={pokemon.sprites.front_default}
                 name={pokemon.name.toUpperCase()}
                 type={pokemon.types[0].type.name}
                />
              </a>
            ))}
        </div>
        <button className="load-more" onClick={getAllPokemons}>
          Carregar mais
        </button>
      </div>
    </div>
 );
};

export default App;
