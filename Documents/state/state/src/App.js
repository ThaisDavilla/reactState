// Crie uma class component 
// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.
// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)

import React, {Component, Componente} from "react";

class Ola extends Component{
  state = {
    nome: "Thais D'avilla",
    idade: 37,
    comida: "lasanha",
    musica: ["Astronauta de Mármore","Sweet Child O' Mine","I Don't Want to Miss a Thing"]
  }
  render(){
    return(
    <div>
      <h1>Olá meu nome é{this.state.nome}.</h1>
      <h2>Minha idade é{this.state.idade}anos.</h2>
      <h3>Eu amo comer{this.state.comida}.</h3>
      <p>Essas são algumas das músicas que gosto de ouvir:</p>
      <ul>
      <li>{this.state.musica[0]}</li>
      <li>{this.state.musica[1]}</li>
      <li>{this.state.musica[2]}</li> 
      </ul>
    </div>
    )
  }
}
export default Ola