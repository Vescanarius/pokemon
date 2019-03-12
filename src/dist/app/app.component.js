"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_pokemons_1 = require("./mock-pokemons");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pokemons = null;
        this.titlePage = "Pokémons";
        this.value = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pokemons = mock_pokemons_1.POKEMONS;
    };
    AppComponent.prototype.onClick = function () {
        console.log("click !");
    };
    AppComponent.prototype.onKey = function (value) {
        this.value = 'Bonjour ' + value;
    };
    AppComponent.prototype.selectPokemon = function (pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-app',
            templateUrl: './app/vues/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map