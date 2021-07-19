import { Link } from 'react-scroll'

function Nav() {

  return (

    <div className="navbar-container">
      <Link to="about" smooth={true} duration={1000}>About</Link>
      <Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
      <Link to="tech" smooth={true} duration={1000}>Technologies</Link>
      <Link to="interests" smooth={true} duration={1000}>Interests</Link>
      <Link to="contact" smooth={true} duration={1000}>Contact</Link>
    </div>

  )  

}

export default Nav