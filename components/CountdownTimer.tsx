import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Countdown from "react-countdown";

interface CountdownProps {
  nextCountdownDateInSeconds: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({
  nextCountdownDateInSeconds,
}) => {
  const [countdownComplete, setCountdownComplete] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = Math.floor(DateTime.now().toSeconds());
      if (current >= Number(nextCountdownDateInSeconds)) {
        setCountdownComplete(true);
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [nextCountdownDateInSeconds]);

  if (countdownComplete) {
    return (
      <div className="flex w-full items-center justify-between">
        <div className="bg-inception-taro px-2 py-1 rounded-lg min-w-[75px]">
          <button className="font-inception-ink-italic text-md">Claim</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full items-center justify-between">
        <span className="font-inception-ink text-lg">Next Claim In</span>
        <div className="bg-inception-blue px-2 py-1 rounded-lg min-w-[75px]">
          <Countdown
            className="font-inception-ink-italic text-md"
            date={new Date(Number(nextCountdownDateInSeconds) * 1000)}
            onComplete={() => setCountdownComplete(true)}
          />
        </div>
      </div>
    );
  }
};

export default CountdownTimer;
