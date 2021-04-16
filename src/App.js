import React, { Component } from 'react';
import Card from './Card'
import GuessCount from './GuessCount'
import './App.css'

import shuffle from 'lodash.shuffle'
import HallOfFame, { FAKE_HOF } from './HallOfFame';

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component{
  cards = this.generateCards()
  /*constructor(props){
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this)
  }*/ /* PREMIERE APPROCHE*/

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size){
      const card = candidates.pop()
      result.push(card,card)
    }
    return shuffle(result)
  }
  /* DEUXIEME APPROCHE */
  
  handleCardClick = (card) => {
    console.log(card,'clicked',this)
  }
  

  /* TROSIÈME APPROCHE decorateur */

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return <div className="memory"> 
      <GuessCount guesses={0}/>
      {this.cards.map((card,index) => (
        <Card 
          card= {card} 
          feedback="visible" 
          key={index} 
          onClick={this.handleCardClick}/>
      ))}
      {won && <HallOfFame entries={FAKE_HOF} />}
    </div>
  }
}

export default App;

/*&& si..alors
?..: si..alors...sinon..*/
