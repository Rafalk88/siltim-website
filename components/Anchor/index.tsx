import Image from 'next/image'
import Link from 'next/link'

import SecuredLetter from "@/public/assets/SecuredLetter.svg"

const Anchor = () => {
  return (
    <section className="w-[80px] h-[80px] rounded-full flex justify-center
      items-center bg-blue fixed top-[85%] right-[1%] cursor-pointer
      drop-shadow-md hover:bg-blue/80"
    >
      <Link href="/#contact" className="cursor-pointer" passHref>
        <Image
          src={SecuredLetter}
          alt={"Contact-icon"}
          width={46}
          height={46}
        />
      </Link>
    </section>
  )
}

export default Anchor