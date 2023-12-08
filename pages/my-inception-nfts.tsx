/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import useAccountMintStats from "../config/cadence/hooks/useAccountMintStats";
import Countdown from "react-countdown";
import useInitializeAccount from "../config/cadence/hooks/useInitializeAccount";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
// @ts-ignore
import confetti from "canvas-confetti";
import { useRouter } from "next/router";
import CountdownTimer from "../components/CountdownTimer";
import useClaimCrystal from "../config/cadence/hooks/useClaimCrystal";

const MyInceptionNfts: NextPage = () => {
  const { accountNfts } = useAccountMintStats();
  const [countdownComplete, setCountdownComplete] = useState<boolean>(false);

  // @ts-ignore
  const { InceptionAvatars, InceptionBlackBoxes } = accountNfts;
  const [showSuccess, setShowSucces] = useState<boolean>(false);

  const mainToast = useRef(null);
  const errorToast = useRef(null);

  const router = useRouter();

  const onSuccess = () => {
    setShowSucces(true);
    confetti();
  };

  const initToastError = (payload: any) => {
    if (!errorToast?.current) {
      // @ts-ignore
      errorToast.current = toast.dark(payload.render, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        isLoading: false,
      });
    }
  };

  const updateToastError = (payload: any) => {
    // @ts-ignore
    return toast.update(errorToast.current, { ...payload });
  };

  const toastError = (payload: any) => {
    initToastError(payload);
    updateToastError(payload);
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

  const [txState, initializeAccount, _] = useInitializeAccount({
    updateToast: updateToast,
    initToast: initToast,
    onSuccess,
  });

  const [state, claimCrystal, __] = useClaimCrystal({
    updateToast: updateToast,
    initToast: initToast,
    onSuccess,
  });

  const renderSuccessMessage = () => {
    return (
      <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro z-40">
        <div className="bg-inception-off-white backdrop-blur-sm bg-opacity-60 rounded-md relative max-w-2xl border-2 border-red-600 p-14 z-50 flex flex-col justify-center gap-4">
          <h3 className="text-inception-green text-center text-sm lg:text-2xl font-bold tracking-widest opacity-90">
            Congratulations you are officially an outcast!
          </h3>

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

  const renderNfts = () => {
    if (Object.keys(accountNfts).length === 0) {
      return (
        <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro z-40">
          <div className="text-center rounded-md relative max-w-2xl p-14 z-50 flex flex-wrap justify-center items-center gap-12">
            <h3>Seems like we need to get you a new identity...</h3>
          </div>
          <img
            src="/images/skater.png"
            alt="skater"
            className="absolute bottom-0 right-0 opacity-40"
          />
          <button
            className="text-6xl font-bold z-50 px-8 py-4 bg-inception-light-green rounded-xl"
            onClick={initializeAccount}
          >
            Become an outcast
          </button>
        </div>
      );
    }

    // if ("InceptionAvatars" in accountNfts) {
    //   return (
    //     <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro z-40">
    //       <div className="text-center rounded-md relative max-w-2xl p-14 z-50 flex flex-wrap justify-center items-center gap-12">
    //         <h3>Seems like we need to get you a new identity...</h3>
    //       </div>
    //       <img
    //         src="/images/skater.png"
    //         alt="skater"
    //         className="absolute bottom-0 right-0 opacity-40"
    //       />
    //       {/* eslint-disable-next-line @next/next/link-passhref */}
    //       {/* <Link href="/marketplace"> */}
    //       <button className="text-6xl font-bold z-50 px-8 py-4 bg-inception-light-green rounded-xl">
    //         You gotta wait until the black market opens...
    //       </button>
    //       {/* </Link> */}
    //     </div>
    //   )
    // }

    return (
      <div className="h-full w-full my-36 px-6bg-inception-off-white">
        <section className="font-inception-ink px-4 flex flex-col">
          <h1 className="uppercase font-inception-ink text-2xl text-inception-light-brown">
            WALLET
          </h1>
          <h1 className="uppercase text-4xl text-inception-brown">
            [INCEPTION IDENTITY]
          </h1>
          <br></br>
        </section>

        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          }}
        >
          {(InceptionAvatars || []).map((avatar: any, index: any) => {
            return (
              <div
                className="flex flex-col text-center gap-4 relative duration-300 px-4 py-4 rounded-xl max-w-xl"
                key={index}
              >
                <img
                  src={avatar.MetadataViewsDisplay.thumbnail.url}
                  className="w-full rounded-md aspect-square"
                  alt=""
                />
                <div className="flex gap-2 flex-col items-start ">
                  <h3 className="font-inception-ink font-bold text-2xl">{`Inception Avatar #${JSON.stringify(
                    avatar?.serialNumber
                  )}`}</h3>
                </div>
              </div>
            );
          })}
          {(InceptionBlackBoxes || []).map((box: any, index: any) => {
            return (
              <div
                className="flex flex-col text-center gap-4 relative duration-300 px-4 py-4 rounded-xl max-w-xl"
                key={index}
              >
                <img
                  src={box.MetadataViewsDisplay.thumbnail.url}
                  className="w-full rounded-md aspect-square"
                  alt=""
                />
                <div className="flex gap-2 flex-col items-start">
                  <h3 className="font-inception-ink font-bold text-2xl">{`Inception Black Box #${JSON.stringify(
                    box?.serialNumber
                  )}`}</h3>

                  <div className="flex w-full items-center justify-between">
                    {!countdownComplete && (
                      <CountdownTimer
                        nextClaimTimeInSeconds={box.nextClaimTimeInSeconds}
                        countdownComplete={countdownComplete}
                        setCountdownComplete={setCountdownComplete}
                      />
                    )}
                    {countdownComplete && (
                      <div className="flex w-full items-center justify-between">
                        <div className="bg-inception-taro px-2 py-1 rounded-lg min-w-[75px]">
                          <button
                            onClick={claimCrystal({ tokenId: box.id })}
                            className="font-inception-ink-italic text-md"
                          >
                            Claim
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div>
        <Head>
          <title>Inception Animals</title>
          <meta property="og:title" content="Inception Animals" key="title" />
          <meta
            property="og:description"
            content="A retro futuristic metaverse brand"
            key="description"
          />
          <meta property="og:url" content="https://www.inceptionanimals.com" />
          <meta
            property="og:image"
            content={
              "https://storage.googleapis.com/inception_public/cyber_hippo.jpg"
            }
          />
        </Head>
      </div>
      <Navigation />
      {!showSuccess ? renderNfts() : renderSuccessMessage()}
    </div>
  );
};

export default MyInceptionNfts;
