/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useRouter } from "next/router"

const Navigation: React.FC = () => {
  const router = useRouter()
  const { pathname } = router

  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "GALLERY", link: "/gallery" },
    { name: "MARKETPLACE", link: "/marketplace" },
    { name: "BLUEPRINT", link: "/blueprint" },
  ]

  return (
    <main>
      <header className="w-full flex justify-between items-center p-6 fixed top-0 z-50 left-2 right-2">
        <Link href="/" passHref>
          <h2 className="w-28 cursor-pointer">
            <img src="/images/logo.png" alt="" className="w-full h-full" />
          </h2>
        </Link>

        <section className="hidden md:flex justify-between items-center gap-4">
          {navLinks.map((navLinkObj, index) => (
            <Link key={index} href={navLinkObj.link} passHref>
              <button
                className={`text-inception-green font-inception font-extrabold hover:text-white transition-all duration-100 hover:bg-inception-green px-4 py-2 bg-white backdrop-blur-sm rounded bg-opacity-60 ${
                  pathname === navLinkObj.link
                    ? "border-[1px] border-inception-green border-opacity-60"
                    : ""
                }`}
              >
                {navLinkObj.name}
              </button>
            </Link>
          ))}
        </section>
      </header>
    </main>
  )
}

export default Navigation
