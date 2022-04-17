/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faWindowClose,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Navigation: React.FC = () => {
  const router = useRouter()
  const { pathname } = router

  let [showMenu, setShowMenu] = useState<boolean>(false)

  const navLinks = [
    { name: "HOME", link: "/", isOpen: true },
    { name: "GALLERY", link: "/gallery", isOpen: false },
    { name: "MARKETPLACE", link: "/marketplace", isOpen: false },
    { name: "BLUEPRINT", link: "/blueprint", isOpen: false },
  ]

  return (
    <main>
      <header className="w-full flex justify-between items-center p-6 fixed top-0 z-50 left-2 right-2">
        <Link href="/" passHref>
          <h2 className="w-28 cursor-pointer">
            <img
              src="/images/logo.png"
              alt=""
              className="w-full h-full relative z-50"
            />
          </h2>
        </Link>

        <section className="hidden md:flex justify-between items-center gap-4">
          {navLinks.map((navLinkObj, index) => (
            <Link
              key={index}
              href={navLinkObj?.isOpen ? navLinkObj.link : "/"}
              passHref
            >
              <button
                className={`text-inception-green font-inception font-extrabold hover:text-white transition-all duration-100 hover:bg-inception-green px-4 py-2 bg-white backdrop-blur-sm rounded bg-opacity-60 ${
                  pathname === navLinkObj.link
                    ? "border-[1px] border-inception-green border-opacity-60"
                    : ""
                }
                ${
                  navLinkObj?.isOpen
                    ? " hover:cursor-pointer"
                    : " hover:cursor-not-allowed"
                }
                `}
              >
                {navLinkObj.name}
              </button>
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
          <ul className="text-md w-full uppercase font-extrabold font-inception text-inception-green">
            {navLinks.map((navLinkObj, index) => (
              <div key={index}>
                <li
                  className={`border-b border-white curs border-opacity-30 ${
                    navLinkObj?.isOpen
                      ? "hover:cursor-pointer"
                      : "hover:cursor-not-allowed"
                  }`}
                >
                  <Link
                    href={navLinkObj?.isOpen ? navLinkObj.link : "/"}
                    passHref
                  >
                    <span
                      onClick={() => {
                        showMenu && navLinkObj?.isOpen
                          ? setShowMenu(!showMenu)
                          : null
                      }}
                      className={`flex justify-between w-full items-center relative hover:text-white transition-all duration-100 hover:bg-inception-green px-4 py-4 bg-white backdrop-blur-sm rounded bg-opacity-60 mt-1 ${
                        pathname === navLinkObj.link
                          ? "border-[1px] border-inception-green border-opacity-60"
                          : ""
                      }`}
                    >
                      {navLinkObj.name}
                    </span>
                  </Link>
                </li>
              </div>
            ))}
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
              <a
                href="https://alliu930410.gitbook.io/inception-animals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faBookBookmark} className="w-6 h-6" />
              </a>
            </div>
          </ul>
          <p className=" flex flex-col mt-6 opacity-80 text-left uppercase font-arcane text-2xs pb-4 px-4 text-inception-green">
            <span>© 2022 Inception Animals</span>
            <span>All Rights Reserved.</span>

            <br />
            <span className="text-xs">inceptionanimals.com</span>
            <br />
            <br />
            <a
              className="underline text-xs text-inception-gray"
              // href="https://storage.googleapis.com/flunks_public/documents/flunks-eula.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              End User License Agreement
            </a>
            <br />
            <a
              className="underline text-xs text-inception-gray"
              // href="https://www.termsfeed.com/live/b4b56390-02a7-463e-85c1-2ff9c47fd8d6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </p>
        </section>
      </header>
    </main>
  )
}

export default Navigation
