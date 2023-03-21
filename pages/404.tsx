import Link from "next/link"

const NotFound = () => {
  return (
    <div className="w-full h-[calc(100vh-478px)] flex flex-col justify-center items-center">
      <h3>Oooops...</h3>
      <h4 className="py-6">Strona - której szukasz, nie istnieje.</h4>
      <p>Powróć do <Link href="/" className="underline">Strony Głównej.</Link></p>
    </div>
  )
}

export default NotFound