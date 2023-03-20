import Link from "next/link"

const icons = [
  {
    name: "facebook",
    link: "",
  },
  {
    name: "instagram",
    link: "",
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
              className="hover:opacity-50 transition duration-500"
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