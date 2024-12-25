import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";


export default function Navigation() {


  return (
    <ul className='navigation'>
      <li><Link to={'/'}><FaHome /></Link></li>
      <li><Link to={'/createBook'}><IoIosCreate /></Link></li>
    </ul>
  )
}
