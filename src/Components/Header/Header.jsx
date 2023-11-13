import './Header.css';

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>Welcome To
          <span className='headerTitleLg'>Blog</span>
          </span>
        
        </div>
        <img  className='headerImg'
        src="https://i.pinimg.com/originals/8d/90/e0/8d90e0a153f20e0145778a8c698c1d69.jpg" 
        alt="" />
    </div>
  )
}
