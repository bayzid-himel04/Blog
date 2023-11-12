import './TopBar.css';

export default function TopBar() {
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
           <li className="topListItem">Home</li>
           <li className="topListItem">About</li>
           <li className="topListItem">Contact</li>
           <li className="topListItem">Write</li>
           <li className="topListItem">LOGOUT</li>
           </ul>
        </div>
        <div className="topRight">
          <img className='topImage' 
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg" alt="" />
          <i class="topSearchIcon fa-brands fa-searchengin"></i>
         </div>     
    </div>
  )
}
