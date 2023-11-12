import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>React && Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img  className='headerImg'
        src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/10/bluebells,_oxfordshire.jpg?fit=1500%2C1000&ssl=1" 
        alt="" />
    </div>
  )
}
