import { useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <section className="w-full h-[calc(100vh-478px)] flex justify-center items-center gap-12">
      <figure>
        <Image src="/assets/monitor.png" alt="error-404-icon" width={300} height={400} />
      </figure>

      <div>
        <h3 className="font-bold text-4xl">Oooops... Coś poszło nie tak.</h3>
        <h4 className="text-2xl py-6">Strona - której szukasz, nie istnieje.</h4>
        <p>Powróć do <Link href="/" className="underline text-blue-500">Strony Głównej.</Link></p>
      </div>
      
    </section>
  )
}

export default NotFound