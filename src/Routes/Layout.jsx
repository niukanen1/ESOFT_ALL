import { Link, Outlet } from 'react-router-dom';
import Logo from "../svg/logo"
import Css from "../styles/index.css"
import SignIcon from "../svg/signIcon.png"


export default function Layout() {

    return (

        <div>
            <header>
                <div className='header-logo'>
                    <Logo/>
                </div>
                <nav>

                <Link to='/'>Main</Link>
                <Link to='/myhome'>My home</Link>
                <Link to='/howitworks'>How it works</Link>


            </nav>
                <div className='header-signin'>
                    <div>
                        Sign In
                        <img src={SignIcon} className="SignIcon"/>
                    </div>
                    <div className='signin_logo'>

                    </div>
                </div>
            </header>
            <Outlet/>
        </div>
       
    )
}