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
    <div className="flex mt-12 gap-12">
      <span className="flex flex-col justify-center items-center w-56 h-40 text-9xl py-4 bg-backgroundLight text-gl">
        {timeLeft.days}
        <small className="text-7xl mt-2">JRS</small>
      </span>
      <span className="flex flex-col justify-center items-center w-56 h-40 text-9xl py-4 bg-backgroundLight text-gl">
        {timeLeft.hours}
        <small className="text-7xl mt-2">HRS</small>
      </span>
      <span className="flex flex-col justify-center items-center w-56 h-40 text-9xl py-4 bg-backgroundLight text-gl">
        {timeLeft.minutes}
        <small className="text-7xl mt-2">MIN</small>
      </span>
      <span className="flex flex-col justify-center items-center w-56 h-40 text-9xl py-4 bg-backgroundLight text-gl">
        {timeLeft.seconds}
        <small className="text-7xl mt-2">SEC</small>
      </span>
    </div>
  );
}

export default Timer;
