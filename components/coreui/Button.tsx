import Link from "next/link"

const NavButton: React.FC = (props: any) => {
  const { content } = props

  return (
    <>
      <Link href="/" passHref>
        <button className="text-white hover:text-[#2b2a2b] transition-all duration-100 hover:bg-white px-4 py-2 bg-[#2b2a2b] bg-opacity-60 backdrop-blur-lg rounded font-bold">
          {content}
        </button>
      </Link>
    </>
  )
}

export default NavButton
