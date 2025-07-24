"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NUM_TARGETS = 10;
const GAME_DURATION = 5; // seconds

export default function NotFoundPage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [targets, setTargets] = useState<{ id: number; x: number; y: number }[]>([]);
  const [hits, setHits] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }

    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  const startGame = () => {
    setGameStarted(true);
    setHits(0);
    setTimeLeft(GAME_DURATION);
    setGameOver(false);
    spawnTargets();
  };

  const spawnTargets = () => {
    const newTargets = Array.from({ length: NUM_TARGETS }, (_, i) => ({
      id: i,
      x: Math.random() * 90,
      y: Math.random() * 90,
    }));
    setTargets(newTargets);
  };

  const handleHit = (id: number) => {
    setHits((h) => h + 1);
    setTargets((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative">
      {/* Glitch Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold text-red-600 glitch mb-4"
      >
        404: Page Not Found
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center text-neutral-300 mb-6"
      >
        But hey, while you're here... fancy testing your aim?
      </motion.p>

      {/* Game Controls */}
      {!gameStarted && !gameOver && (
        <button
          onClick={startGame}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg mb-6 transition"
        >
          Start Aim Trainer
        </button>
      )}

      {/* Game Info */}
      {gameStarted && !gameOver && (
        <div className="mb-4 text-sm text-neutral-400">Time Left: {timeLeft}s | Hits: {hits}</div>
      )}

      {/* Game Board */}
      <div className="relative w-full max-w-2xl h-[400px] border border-red-500 bg-neutral-900 rounded-xl overflow-hidden">
        {gameStarted &&
          targets.map((target) => (
            <motion.div
              key={target.id}
              onClick={() => handleHit(target.id)}
              className="absolute w-6 h-6 bg-red-500 rounded-full cursor-pointer hover:scale-110 transition"
              style={{
                top: `${target.y}%`,
                left: `${target.x}%`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          ))}
      </div>

      {/* Game Over */}
      {gameOver && (
        <div className="mt-6 text-center">
          <p className="text-lg font-bold text-white">Game Over! You hit {hits} target{hits !== 1 ? "s" : ""}.</p>
          <button
            onClick={startGame}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
          >
            Play Again
          </button>
        </div>
      )}

      {/* Return */}
      <Link href="/" className="mt-8 text-red-500 hover:underline">
        ← Back to Home
      </Link>

      {/* Glitch Effect Styling */}
      <style jsx>{`
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(class);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          animation: glitchTop 1s infinite linear alternate-reverse;
          color: #ff4d4d;
        }
        .glitch::after {
          animation: glitchBottom 1s infinite linear alternate-reverse;
          color: #ff0000;
        }
        @keyframes glitchTop {
          0% {
            clip: rect(0, 9999px, 0, 0);
            transform: translate(-3px, -2px);
          }
          50% {
            clip: rect(0, 9999px, 5px, 0);
            transform: translate(3px, 2px);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
            transform: translate(-3px, -1px);
          }
        }
        @keyframes glitchBottom {
          0% {
            clip: rect(0, 9999px, 0, 0);
            transform: translate(3px, 2px);
          }
          50% {
            clip: rect(5px, 9999px, 9999px, 0);
            transform: translate(-3px, -2px);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
            transform: translate(3px, 1px);
          }
        }
      `}</style>
    </main>
  );
}
