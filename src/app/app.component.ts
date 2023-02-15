import { Component, OnInit } from "@angular/core";
// Importation des datas
import { POKEMONS } from "./mock-pokemon-list";
// Importation du model
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  template: ` <h1>Liste de pokémons</h1> `,
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[3]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le ${pokemon.name}`);
  }
}
