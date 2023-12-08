import React from "react";
import { DateTime } from "luxon";
import Countdown from "react-countdown";

const CountdownTimer: React.FC = () => {
  // Get the current date and time in EST
  const now = DateTime.now().setZone("America/New_York");

  // Calculate the start of the current week (Monday at 00:00)
  const startOfWeek = now.startOf("week");

  // Set the countdown date to the following Saturday at 12:00 AM EST
  const countdownDate = startOfWeek.plus({ days: 6 }).toJSDate();

  return (
    <div className="flex w-full items-center justify-between">
      <span className="font-inception-ink text-lg">Claim Refresh In</span>
      <div className="bg-inception-blue px-2 py-1 rounded-lg min-w-[75px]">
        <Countdown
          className="font-inception-ink-italic text-md"
          date={countdownDate}
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
