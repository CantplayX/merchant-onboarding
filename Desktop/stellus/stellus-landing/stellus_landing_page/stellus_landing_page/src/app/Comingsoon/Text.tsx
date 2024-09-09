"use client"
import React, { useState, useEffect } from "react";

const COUNTDOWN_DURATION_DAYS = 20;

const calculateRemainingTime = () => {
  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + COUNTDOWN_DURATION_DAYS);

  const totalSeconds = Math.max((endDate.getTime() - now.getTime()) / 1000, 0);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { days, hours, minutes, seconds };
};

export default function Text() {
  const [timeRemaining, setTimeRemaining] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute flex flex-col text-[5.5vw] uppercase w-[80vw] items-start leading-tight">
      <p>StellusAi</p>
      <p className="self-end">Coming Soon</p>
      <p>
        Countdown: {timeRemaining.days}d {timeRemaining.hours}h{" "}
        {timeRemaining.minutes}m {timeRemaining.seconds}s
      </p>
    </div>
  );
}
