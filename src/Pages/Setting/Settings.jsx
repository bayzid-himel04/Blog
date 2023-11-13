import './Settings.css';
import SideBar from '../../Components/SideBar/SideBar';
export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeletTitle">Delete Account</span>
            </div>
            <form  className="settingsForm">
              <label> profile picture</label>
              <div className="settingsPP">
                <img 
                src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/nature-photography.jpg" 
                alt="" />
                <label htmlFor="fileInput">
                <i className="settingPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
              </div>
              <label >Username</label>
              <input type="text" placeholder='Bayzid' />
              <label >Email</label>
              <input type="email" placeholder='Bayzidhimel04@gmail.com' />
              <label >Password</label>
              <input type="password" />
              <button className="settingsSubmit">Update</button>
            </form>
      </div>
      <SideBar/>
    </div>
  )
}
