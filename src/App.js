import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [lScore, setLScore] = useState(0);
  const [tScore, setTScore] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(seconds + 1);
      clearInterval(timer);
    }, 1000);
  });

  const useTimer = time => {
    let minutes = Math.floor((time / 60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(time % 60).toString().padStart(2, 0);
    return `${minutes}:${seconds}`;
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{lScore}</div>
          </div>
          <div className="timer">{useTimer(seconds)}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick={() => setLScore(lScore + 7)}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setLScore(lScore + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setTScore(tScore + 7)}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setTScore(tScore + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
