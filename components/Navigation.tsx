/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faWindowClose,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ConnectWalletNav from "./ConnectWallet";

const Navigation: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  // let [backgroundCss, setBackgroundCss] = useState("bg-inception-off-white")
  let [showMenu, setShowMenu] = useState<boolean>(false);

  // useEffect(() => {
  //   if (pathname === "/blueprint") {
  //     setBackgroundCss("bg-inception-off-white")
  //   }
  // }, [])

  const navLinks = [
    { name: "HOME", link: "/", isOpen: true },
    { name: "BLUEPRINT", link: "/blueprint", isOpen: true },
    { name: "CITY", link: "/city", isOpen: true },
    {
      name: "BLACKMARKET",
      link: "https://zeero.art/collection/inception-animals?",
      isOpen: true,
    },
    { name: "EXCHANGE", link: "/exchange", isOpen: true },
  ];

  const externalNavLinks = [
    {
      name: <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />,
      link: "https://twitter.com/Inceptionft",
      isOpen: true,
      desc: "twitter",
    },
    {
      name: <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />,
      link: "https://discord.gg/zDbDHjTTvY",
      isOpen: true,
      desc: "discord",
    },
    // {
    //   name: <img className="w-5 h-5" src="/icons/opensea.svg" alt=""></img>,
    //   link: "https://www.inceptionanimals.com",
    //   isOpen: false,
    //   desc: "opensea",
    // },
    // {
    //   name: <FontAwesomeIcon icon={faBookBookmark} className="w-4 h-4" />,
    //   link: "https://alliu930410.gitbook.io/inception-animals",
    //   isOpen: true,
    // },
  ];

  return (
    <main>
      <header
        className={`w-full flex justify-between items-center p-6 fixed top-0 z-50`}
      >
        <Link href="/" passHref>
          <h2 className="w-28 cursor-pointer">
            <img
              src="/logo.png"
              alt=""
              className="w-full h-full relative z-50"
            />
          </h2>
        </Link>

        <section className="hidden md:flex justify-between items-center gap-4 text-2xl">
          {navLinks.map((navLinkObj, index) => (
            <Link
              key={index}
              href={navLinkObj?.isOpen ? navLinkObj.link : ""}
              passHref
            >
              <button
                className={`text-inception-green font-inception-ink font-extrabold hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-2 bg-inception-off-white backdrop-blur-sm rounded bg-opacity-60 ${
                  pathname === navLinkObj.link ? "underline" : ""
                }
                ${
                  navLinkObj?.isOpen
                    ? " hover:cursor-pointer"
                    : " hover:cursor-not-allowed opacity-50"
                }
                `}
              >
                {navLinkObj.name}
              </button>
            </Link>
          ))}
          <ConnectWalletNav />
          {externalNavLinks.map((navLinkObj, index) => (
            <Link
              key={index}
              href={navLinkObj?.isOpen ? navLinkObj.link : "/"}
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <button
                  className={`text-inception-green font-inception font-extrabold transition-all duration-100 px-4 py-2 rounded ${
                    pathname === navLinkObj.link
                      ? "border-[1px] border-inception-green"
                      : ""
                  }
                ${
                  navLinkObj?.isOpen
                    ? " hover:cursor-pointer"
                    : " hover:cursor-not-allowed opacity-50"
                }
                ${
                  navLinkObj?.desc === "twitter"
                    ? " hover:text-twitter-blue"
                    : " hover:text-discord-blue"
                }
                `}
                >
                  {navLinkObj.name}
                </button>
              </a>
            </Link>
          ))}
        </section>

        <button
          className="md:hidden transition-all hover:scale-105 z-50"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FontAwesomeIcon
            icon={showMenu ? faWindowClose : faBars}
            onClick={() => setShowMenu(!showMenu)}
            className={`w-6 h-6 ${
              showMenu ? "text-inception-green" : "text-inception-green"
            }`}
          />
        </button>

        <section
          className={`overflow-auto w-screen h-screen fixed top-0 bottom-0 left-0 right-0 pt-24 bg-inception-off-white backdrop-blur-lg bg-opacity-70 px-6 z-30 transition-all duration-500 ${
            showMenu ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <ul className="text-md w-full uppercase font-extrabold font-inception-ink text-inception-green">
            {navLinks.map((navLinkObj, index) => (
              <div key={index}>
                <li
                  className={`border-b border-white curs border-opacity-30 ${
                    navLinkObj?.isOpen
                      ? "hover:cursor-pointer"
                      : "hover:cursor-not-allowed opacity-50"
                  }`}
                >
                  <Link
                    href={navLinkObj?.isOpen ? navLinkObj.link : ""}
                    passHref
                  >
                    <span
                      onClick={() => {
                        showMenu && navLinkObj?.isOpen
                          ? setShowMenu(!showMenu)
                          : null;
                      }}
                      className={`flex justify-between w-full items-center relative hover:text-inception-green transition-all duration-100 hover:bg-white px-4 py-4 bg-inception-light-green backdrop-blur-sm rounded bg-opacity-60 mt-1 ${
                        pathname === navLinkObj.link
                          ? "border-[1px] border-inception-green"
                          : ""
                      }`}
                    >
                      {navLinkObj.name}
                    </span>
                  </Link>
                </li>
              </div>
            ))}
            <ConnectWalletNav />
            <div className="flex items-center justify-start gap-4 p-4">
              <a
                href="https://twitter.com/Inceptionft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              </a>
              <a
                href="https://discord.gg/zDbDHjTTvY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
              </a>
              {/* <a
                href="https://alliu930410.gitbook.io/inception-animals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faBookBookmark} className="w-6 h-6" />
              </a> */}
            </div>
          </ul>
          <p className=" flex flex-col mt-6 opacity-80 text-left uppercase text-2xs pb-4 px-4 text-inception-green font-inception-ink">
            <span>© 2022 Ube Studios Inc.</span>
            <span>All Rights Reserved.</span>

            <br />
            <span className="text-xs">inceptionanimals.com</span>
            <br />
            <br />
            <a
              className="underline text-xs text-inception-gray"
              href="https://storage.googleapis.com/inception_public/documents/Inception_Animals_EULA.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              End User License Agreement
            </a>
            <br />
            <a
              className="underline text-xs text-inception-gray"
              href="https://storage.googleapis.com/inception_public/documents/IA_private_policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </p>
        </section>
      </header>
    </main>
  );
};

export default Navigation;
