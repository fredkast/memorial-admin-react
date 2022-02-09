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
      const [nbrPokemon, setCount] = useState(20);
      const [allPokemons, setAllPokemons] = useState([]);
      // const loadPoke = useState(
      //   "https://pokeapi.co/api/v2/pokemon?limit="+nbrPokemon
      // );
      const [loadPoke, setLoadPoke] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
          );
    
      const getAllPokemons = async () => {
        console.log(loadPoke);
        // const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit="+nbrPokemon);
        const res = await fetch(loadPoke);
        //
        const data = await res.json();
        setCount(nbrPokemon+20);
        setLoadPoke("https://pokeapi.co/api/v2/pokemon?offset=" + nbrPokemon + "&limit=20")
        CreatePokemonObject(data.results);
      };
    
      useEffect(() => {
        getAllPokemons();
      }, []);

      console.log(allPokemons);
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
        <button className='button' onClick={()=> {getAllPokemons()}}>Suivants</button>
        {/* <a href="#" onClick={handleClick}>Clique ici</a> */}
        </div>
    
    );
}
export default Exo2