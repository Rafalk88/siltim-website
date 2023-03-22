import Image from "next/image"

const index = () => {
  return (
    <section className="flex justify-center items-center fixed top-0
      left-0 w-full h-full z-50 bg-slate-400/50"
    >
      <Image 
        className="animate-loading"
        src="/assets/loading.png"
        alt="loading-icon"
        width={200}
        height={200}
      />
    </section>
  )
}

export default index