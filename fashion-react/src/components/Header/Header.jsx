import logo from '../../img//icons/logo.svg'
import "./Header.scss"

const Header = () => {
  return (
    <header className='headerWrapper container'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h1>Fashion</h1>
      </div>
      <nav className='headerNav'>
        <ul className='navList'>
          <li className='navListItem'>Catalogue</li>
          <li className='navListItem'>Fashion</li>
          <li className='navListItem'>Favorite</li>
          <li className='navListItem'>Lifestyle</li>
          <li className='navListItem signUp'>Sign Up</li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
