import React, { useState } from 'react';
import './App.css';

type Judge = (hand: string, cpu: string) => string;

const handArr = ['rock', 'scissors', 'paper'];

export const App: React.FC = () => {
  const [cpu, setCPU] = useState('');
  const [start, setStart] = useState(false);
  const [hand, setHand] = useState('');
  const handleReset = () => {
    if (start) {
      setHand('');
      setCPU('');
    } else {
      const ramdomCpu = handArr[Math.floor(Math.random() * 4)];
      setCPU(ramdomCpu);
    }
    setStart(!start);
  }

  const judge: Judge = (hand, cpu) => {
    if (hand === cpu) {
      return 'アイコ';
    } else if ((hand === 'rock' && cpu === 'scissors') || (hand === 'scissors' && cpu === 'paper') || (hand === 'paper' && cpu === 'rock')) {
      return 'カチ';
    } else {
      return 'マケ';
    }
  }

  return (
    <div className="App">
      <div>
        何が出るかな
      </div>
      <div>
        <button onClick={handleReset}>{start === false ? 'Start' : 'Reset'}</button>
      </div>
      <div>
        <button onClick={() => setHand('rock')}>グー</button>
        <button onClick={() => setHand('scissors')} > チョキ</button>
        <button onClick={() => setHand('paper')} > パー</button>
      </div >
      <div>
        state: {hand}<br />
        cpu: {cpu}
      </div>
      <div>
        {hand === '' ? false : judge(hand, cpu)}
      </div>
    </div >
  );
}

