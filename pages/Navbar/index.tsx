const menu = [
  {id: 1, text: 'Główna'},
  {id: 2, text: 'O nas'},
  {id: 3, text: 'Syntezy na zlecenie'},
  {id: 4, text: 'Katalizatory'},
  {id: 5, text: 'Sklep'},
]

export const index = () => {
  return (
    <nav className="main-container navbar-container">
      <div>
        <figure>
          <a href="./"><img src="" alt="logo" /></a>
        </figure>
        <p>Advanced materials for molecular design</p>
      </div>
      <div>
        <ul>
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
    </nav>
  )
}

export default index