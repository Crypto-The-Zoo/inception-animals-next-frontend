import React, { useState, useEffect, useRef } from "react";
import { DateTime } from "luxon";
import Countdown from "react-countdown";
import useClaimCrystal from "../config/cadence/hooks/useClaimCrystal";
import { toast } from "react-toastify";
// @ts-ignore
import confetti from "canvas-confetti";
import { useRouter } from "next/router";

interface CountdownProps {
  nftId: string;
  nextClaimTimeInSeconds: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({
  nftId,
  nextClaimTimeInSeconds,
}) => {
  const [countdownComplete, setCountdownComplete] = useState<boolean>(false);
  const [showClaimSuccess, setShowClaimSuccess] = useState<boolean>(false);

  const mainToast = useRef(null);
  const errorToast = useRef(null);

  const router = useRouter();

  const onClaimSuccess = () => {
    setShowClaimSuccess(true);
    confetti();
    router.push("/claim-success"); // Redirect to success page
  };

  const initToast = () =>
    // @ts-ignore
    (mainToast.current = toast.dark("Awaiting approval..", {
      position: toast.POSITION.TOP_CENTER,
      isLoading: true,
    }));

  const updateToast = (update: any) => {
    // @ts-ignore
    toast.update(mainToast.current, { ...update });
  };

  const [state, claimCrystal, __] = useClaimCrystal({
    updateToast: updateToast,
    initToast: initToast,
    onSuccess: onClaimSuccess,
  });

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

  const renderClaimSuccessMessage = () => {
    return (
      <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro z-40">
        <div className="bg-inception-off-white backdrop-blur-sm bg-opacity-60 rounded-md relative max-w-2xl border-2 border-red-600 p-14 z-50 flex flex-col justify-center gap-4">
          <h3 className="text-inception-green text-center text-sm lg:text-2xl font-bold tracking-widest opacity-90">
            <h3 className="text-inception-green text-center text-sm lg:text-2xl font-bold tracking-widest opacity-90">
              Congratulations you've Claimed Inception Crystals!
            </h3>
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            <img
              src="https://storage.googleapis.com/inception_public/crystal.png"
              alt=""
              className="w-24 h-24"
            ></img>
            <h1>X 7</h1>
          </div>

          <button
            className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green m-auto"
            onClick={() => router.reload()}
          >
            {"Let's go!"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {!countdownComplete && (
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
      )}
      {countdownComplete && (
        <div className="flex w-full items-center justify-between">
          <div className="bg-inception-taro px-2 py-1 rounded-lg min-w-[75px]">
            <button
              onClick={() => claimCrystal({ tokenId: Number(nftId) })}
              className="font-inception-ink-italic text-md"
            >
              Claim
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
