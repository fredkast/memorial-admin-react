import React,{ useEffect, useState } from "react";


function Exo2(){

    function CreatePokemonObject(result) {
        result.forEach(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await res.json();
          setAllPokemons((currentList) => [...currentList, data]);
        });
      }
        // nombre de pokemon a afficher
      const [nbrPokemon, setCount] = useState(2);

      const [allPokemons, setAllPokemons] = useState([]);
      const loadPoke = useState(
        "https://pokeapi.co/api/v2/pokemon?limit="+nbrPokemon
      );
    
      const getAllPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit="+nbrPokemon);
        const data = await res.json();
        CreatePokemonObject(data.results);
      };
    
      useEffect(() => {
        getAllPokemons();
      }, []);

      function handleClick(e) {
        e.preventDefault();
        setCount(nbrPokemon+20);
        console.log(nbrPokemon);
        getAllPokemons()
      }
    return(
        
        <div className="container-data">
        <h1 className="title">Exercice 2</h1>
        <ul className="perso-list">
          {allPokemons.map((pokemon) =>
            <li className={"perso-card-"+pokemon.types[0].type.name} key={pokemon.id} >
              <p>#{pokemon.id}</p>
              <img className='perso-img' src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+pokemon.id+'.svg'}></img>
              <p className="perso-name">{ pokemon.name }</p>
              <p className="perso-gender">Type: {pokemon.types[0].type.name}</p>
            </li> 
            )
          }
          

        </ul>
        {/* <button className='button' onclick={()=> {console.log(nbrPokemon);setCount(nbrPokemon+20); }}>Suivants</button> */}
        <a href="#" onClick={handleClick}>Clique ici</a>
        </div>
    
    );
}
export default Exo2