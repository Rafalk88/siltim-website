import Image from 'next/image'

import Logo from '../../public/assets/Logo.png'

const menu = [
  {id: 1, text: 'Główna'},
  {id: 2, text: 'O nas'},
  {id: 3, text: 'Syntezy na zlecenie'},
  {id: 4, text: 'Katalizatory'},
  {id: 5, text: 'Sklep'},
];

const flexBetween = "flex items-center justify-between";

export const index = () => {
  return (
    <nav className={`${flexBetween} fixed top-0 z-30 w-full py-3`}>
      <div className="mx-auto w-5/6 max-w-[1200px]">
        <div className={`${flexBetween}`}>
          <figure className="p-2 h-16 w-16">
            <a href="./">
              <Image src={Logo} alt={"Logo"} />
            </a>
          </figure>
          <p>Advanced materials for molecular design</p>
        </div>

        <div>
          <ul className={`${flexBetween}`}>
            {
              menu.map(item => {
                return (
                  <li key={item.id}>
                    {item.text}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default index