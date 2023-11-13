
import Header from '../../Components/Header/Header';
import './Home.css';
import Posts from '../../Components/Posts/Posts';
import SideBar from '../../Components/SideBar/SideBar';

export default function Home() {
  return (
    <>
     <Header/>
    <div className='home'>
       <Posts/>
       <SideBar/>
    </div>
    </>
  )
}
