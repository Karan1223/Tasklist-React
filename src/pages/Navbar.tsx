import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
        <ul id="nav">
            <li className="list">
            <Link className="link" to='/home'>
                Home
            </Link>
            </li>
            <li className="list">
            <Link className="link" to='/about'>
                About
            </Link>
            </li>
            <li className="list">
            <Link className="link" to='/contacts'>
                Contacts
            </Link>
            </li>
            <li className="list">
            <Link className="link" to='/posts'>
                Posts
            </Link>
            </li>
            
            
            
            <li className="list">
            <Link className="link" to='/Tasklist'>
                Tasklist
            </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar