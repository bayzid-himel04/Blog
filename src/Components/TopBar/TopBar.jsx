import { Link } from 'react-router-dom';
import './TopBar.css';

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-threads"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        </div>
        <div className="topCenter">
           <ul className="topList">
           <li className="topListItem">
            <Link to="/" className='link'>Home</Link>
           </li>
           <li className="topListItem">
           <Link to="/" className='link'>About</Link>
           </li>
           <li className="topListItem">
           <Link to="/" className='link'>Contact</Link>
           </li>
           <li className="topListItem">
           <Link to="/write" className='link'>Write</Link>
           </li>
           <li className="topListItem"> 
           {user && "LOGOUT"}
           </li>
           </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className='topImage' 
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg" alt="" />
            ) : (
              <ul className='topList'>
                <li className="topListItem">
                <Link to="/login" className='link'>LOGIN</Link>
                </li>
                <li className="topListItem">
                <Link to="/register" className='link'>REGISTER</Link>
                </li>
              </ul>
            )
          }
          <i class="topSearchIcon fa-brands fa-searchengin"></i>
         </div>     
    </div>
  )
}
