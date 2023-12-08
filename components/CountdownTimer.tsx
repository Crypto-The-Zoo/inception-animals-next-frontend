import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Countdown from "react-countdown";

interface CountdownProps {
  nextClaimTimeInSeconds: string;
  countdownComplete: boolean;
  setCountdownComplete: (complete: boolean) => void;
}

const CountdownTimer: React.FC<CountdownProps> = ({
  nextClaimTimeInSeconds,
  countdownComplete,
  setCountdownComplete,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const current = Math.floor(DateTime.now().toSeconds());
      if (current >= Number(nextClaimTimeInSeconds)) {
        setCountdownComplete(true);
      } else {
        console.log({
          current,
          mint: Number(nextClaimTimeInSeconds),
        });
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [nextClaimTimeInSeconds]);

  return (
    <div className="flex w-full items-center justify-between">
      <span className="font-inception-ink text-lg">Next Claim In</span>
      <div className="bg-inception-blue px-2 py-1 rounded-lg min-w-[75px]">
        <Countdown
          className="font-inception-ink-italic text-md"
          date={new Date(Number(nextClaimTimeInSeconds) * 1000)}
          onComplete={() => setCountdownComplete(true)}
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
