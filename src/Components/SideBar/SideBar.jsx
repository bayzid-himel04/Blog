import './SideBar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME</span>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9KlKP_N0hGufiT2e5mTXC5ENCSUM-0STlg&usqp=CAU" 
            alt="" />
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi similique aspernatur, 
            provident nulla accusamus voluptatibus animi voluptatem eveniet optio excepturi qui repellat,
            quasi aperiam amet! Ratione blanditiis ipsam, 
            aliquid, ducimus fugit dicta error eveniet voluptates porro, facilis asperiores perspiciatis saepe.
            </p>
        </div>
        <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span> 
        <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Sport</li>
            <li className="sideBarListItem">Tech</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span> 
        <div className="sideBarSocial">
        <i className="sideBarIcon fa-brands fa-facebook"></i>
        <i className="sideBarIcon fa-brands fa-square-instagram"></i>
        <i className="sideBarIcon fa-brands fa-square-threads"></i>
        <i className="sideBarIcon fa-brands fa-x-twitter"></i>
        </div>
        </div>
    </div>
  )
}
