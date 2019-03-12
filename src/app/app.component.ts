import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app/vues/app.component.html'
})
export class AppComponent implements OnInit {

  pokemons: Pokemon[] = null;
  private titlePage:string="Pokémons";
  values='';

  ngOnInit() {
    this.pokemons = POKEMONS;
  }


  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
  }

}
