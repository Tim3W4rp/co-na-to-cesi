import { useState } from 'react';
import './App.css';
import  { questions1, questions2} from './questions';

function App() {
  const [currentTeam, setCurrentTeam] = useState(undefined);
  const [currentRound, setCurrentRound] = useState(1);
  const [errorLimit, setErrorLimit] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [roundComplete, setRoundComplete] = useState(false);

  function revealAnswer(item, index) {
    document.getElementById(`answer-${index}`).innerHTML = item.answer;
    document.getElementById(`score-${index}`).innerHTML = item.score;
    setCurrentScore(currentScore => currentScore += item.score);
  }

  const completeRound = () => {
    console.log(currentTeam, currentScore)
    if (currentTeam === 'left') {
      setTeam1Score(score => score += currentScore)
    } else if (currentTeam === 'right') {
      setTeam2Score(score => score += currentScore)
    }
    setRoundComplete(true)
  }

  const advanceRound = () => {
    setCurrentScore(0)
    setErrorLimit(0)
    setCurrentTeam(undefined)
    setCurrentRound(current => current + 1)
    Array.from(document.getElementsByClassName('answer-text')).forEach(item => item.innerHTML = '')
    Array.from(document.getElementsByClassName('answer-score')).forEach(item => item.innerHTML = '')
    setRoundComplete(false)
  }

  const questions = questions2; // change questions here

  return (
    <div className="App">
      <div className="header">
        <div className="score top">{currentScore}</div>
        <div className="controls">
          <button className="arrow-left" style={{ cursor: 'pointer'}} onClick={() => setCurrentTeam('left')}></button>
          <button
            className="btn-cross"
            onClick={() => setErrorLimit(errors => errors + 1)}
            style={{ cursor: roundComplete || errorLimit === 3 ? 'auto' : ''}}
            disabled={roundComplete || errorLimit === 3}
          >
            <img className="cross" src="cross.png"></img>
          </button>
          <button
            className="btn-checkmark"
            disabled={roundComplete || !currentTeam}
            onClick={completeRound}
            style={{cursor: roundComplete || !currentTeam  ? 'auto' : 'pointer'}}
          >
            <img className="checkmark" src="checkmark.png"></img>
          </button>
          <button
            className="btn-arrow"
            disabled={!roundComplete || currentRound === 5}
            onClick={advanceRound}
            style={{cursor: !roundComplete || currentRound === 5 ? 'auto' : 'pointer'}}
          >
            <img className="arrow" src="arrow.png"></img>
          </button>
          <button className="arrow-right" style={{ cursor: 'pointer'}} onClick={() => setCurrentTeam('right')}></button>
        </div>
      </div>
      <div className="cross-container">
        <img id="first" style={{ visibility: errorLimit > 0 ? 'visible' : 'hidden' }} className="cross" src="cross.png"></img>
        <img id="second" style={{ visibility: errorLimit > 1 ? 'visible' : 'hidden' }} className="cross" src="cross.png"></img>
        <img id="third" style={{ visibility: errorLimit > 2 ? 'visible' : 'hidden' }} className="cross" src="cross.png"></img>
      </div>
      <div className="game">
        <div className="score left">{team1Score}</div>
        {<div className="arrow-left" style={ currentTeam === 'left' ? {borderRight: '40px solid white'} : {borderRight: '40px solid transparent'}}></div>}
      <div className="game-table">
        <div className="question">{questions[currentRound - 1].question}</div>
        <div className="answers">
        {questions[currentRound - 1].answers.map((item, index) => {
          const isAnswerRevealed = document.getElementById(`answer-${index}`)?.innerHTML;
          return (
            <div className="answer" key={index}>
              <div id={`answer-${index}`} className="answer-text"></div>
              <div id={`score-${index}`} className="answer-score"></div>
              <button
                className="answer-rank"
                onClick={() => revealAnswer(item, index)}
                disabled={isAnswerRevealed}
                style={{cursor: isAnswerRevealed ? 'auto' : 'pointer'}}
              >
                {5 - index}
              </button>
            </div>
          )
        })}
        </div>
      </div>
      {<div className="arrow-right" style={ currentTeam === 'right' ? {borderLeft: '40px solid white'} : {borderLeft: '40px solid transparent'}}></div>}
        <div className="score right">{team2Score}</div>
      </div>
    </div>
  );
}

export default App;
