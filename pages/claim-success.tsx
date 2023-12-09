/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const ClaimSuccess: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/my-inception-nfts"); // Redirect to inventory page
  };

  const renderSuccessMessage = () => {
    return (
      <div className="flex flex-col h-screen relative justify-center items-center m-auto font-inception-ink text-2xl text-inception-taro z-40">
        <div className="bg-inception-off-white backdrop-blur-sm bg-opacity-60 rounded-md relative max-w-2xl border-2 border-red-600 p-14 z-50 flex flex-col justify-center gap-4">
          <h3 className="text-inception-green text-center text-sm lg:text-2xl font-bold tracking-widest opacity-90">
            <h3 className="text-inception-green text-center text-sm lg:text-2xl font-bold tracking-widest opacity-90">
              Congratulations you are all set!
            </h3>
          </h3>

          <button
            className="text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 hover:cursor-pointer border-2 border-inception-green m-auto"
            onClick={handleClick}
          >
            {"Let's go!"}
          </button>
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
      {renderSuccessMessage()}
    </div>
  );
};

export default ClaimSuccess;
