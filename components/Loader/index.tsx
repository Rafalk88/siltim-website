import { RevolvingDot } from 'react-loader-spinner'

const Loader = () => {
  return (
    <section className="flex justify-center items-center fixed top-0
      left-0 w-full h-full z-50 bg-slate-400/50"
    >
      <RevolvingDot
        height="100"
        width="100"
        radius={75}
        color="#0133FF"
        secondaryColor=''
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  )
}

export default Loader