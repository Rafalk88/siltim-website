type Props = {
  children: React.ReactNode
}

const Submenu = ({ children }: Props) => {
  return (
    <section className="flex flex-col sm:flex-row justify-evenly items-center w-5/6 max-w-[1200px] mx-auto pt-12 gap-2">
      {children}
    </section>
  )
}

export default Submenu