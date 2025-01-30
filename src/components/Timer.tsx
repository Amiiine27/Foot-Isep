"use client";
import React, { useState, useEffect } from "react";

function Timer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Nettoyage pour éviter les fuites de mémoire
  }, [targetDate]);

  return (
    <div>
      <div className="flex mt-8 gap-8 justify-center items-center">
      <span className="flex flex-col justify-center items-center min-w-36 text-4xl py-3 bg-backgroundLight text-gl overflow-x-auto">
          {timeLeft.days}
          <small>Jours</small>
        </span>
        <span className="flex flex-col justify-center items-center min-w-36 text-4xl py-3 bg-backgroundLight text-gl overflow-x-auto">
          {timeLeft.hours}
          <small>Heures</small>
        </span>
        <span className="flex flex-col justify-center items-center min-w-36 text-4xl py-3 bg-backgroundLight text-gl overflow-x-auto">
          {timeLeft.minutes} <small>Minutes</small>
        </span>
        <span className="flex flex-col justify-center items-center min-w-36 text-4xl py-3 bg-backgroundLight text-gl overflow-x-auto">
          {timeLeft.seconds}
          <small>secondes</small>
        </span>
      </div>
    </div>
  );
}

export default Timer;
