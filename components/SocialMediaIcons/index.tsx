import Link from "next/link"

const icons = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/siltim/",
  },
]

type Props = {
  className: string
}

const SocialMediaIcons = ({ className }: Props) => {
  return (
    <section className={className}>
      {
        icons.map((icon) => {
          return (
            <Link
              key={icon.name}
              href={icon.link}
              className="hover:opacity-50 transition duration-500 w-[48px] h-[48px]"
              target="_blank"
              rel="noreferrer"
            >
              <img src={`./assets/${icon.name}.png`} alt={`${icon.name}-link`} />
            </Link>
          )
        })
      }
    </section>
  )
}

export default SocialMediaIcons