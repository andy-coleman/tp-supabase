import { useState } from 'react';

export default function NumberGame() {
  const [number, setNumber] = useState<number | ''>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [targetNumber, setTargetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [previousGuesses, setPreviousGuesses] = useState<number[]>([]);

  const playGame = async () => {
    if (number === '') return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const currentGuess = number;
      setPreviousGuesses(prev => [...prev, currentGuess]);
      setAttempts(prev => prev + 1);
      
      let message = '';
      if (currentGuess === targetNumber) {
        message = `¡Felicitaciones! ¡Adivinaste el número correcto en ${attempts + 1} intentos!`;
        setGameOver(true);
      } else if (currentGuess < targetNumber) {
        message = `¡Muy bajo! Intenta con un número más alto.`;
      } else {
        message = `¡Muy alto! Intenta con un número más bajo.`;
      }
      
      setResult(message);
      setNumber('');
    } catch (error) {
      setResult('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const restartGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setNumber('');
    setResult('');
    setAttempts(0);
    setGameOver(false);
    setPreviousGuesses([]);
  };

  return (
    <div className="game-container">
      <h2>Juego de Números</h2>
      <p>Ingresa un número entre 1 y 100</p>
      <div className="game-input">
        <input
          type="number"
          min="1"
          max="100"
          value={number}
          onChange={(e) => setNumber(e.target.value ? parseInt(e.target.value) : '')}
          placeholder="Ingresa un número"
          disabled={gameOver}
        />
        <button 
          onClick={playGame} 
          disabled={loading || number === '' || gameOver}
          className="play-button"
        >
          {loading ? 'Jugando...' : '¡Jugar!'}
        </button>
      </div>
      
      {result && (
        <div className="result-container">
          <p className="result">{result}</p>
          {gameOver && (
            <button onClick={restartGame} className="restart-button">
              ¡Jugar de nuevo!
            </button>
          )}
        </div>
      )}

      {previousGuesses.length > 0 && (
        <div className="guesses-history">
          <h3>Intentos anteriores:</h3>
          <div className="guesses-list">
            {previousGuesses.map((guess, index) => (
              <span 
                key={index} 
                className={`guess ${guess === targetNumber ? 'correct' : guess < targetNumber ? 'low' : 'high'}`}
              >
                {guess}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 