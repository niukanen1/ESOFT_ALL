import { Link, Outlet } from 'react-router-dom';
import Logo from "../svg/logo"
import Css from "../styles/index.css"
import SignIcon from "../svg/signIcon.png"
import {useState} from "react";
import ModelPopUp from "../componens/ModelPopUp";


export default function Layout() {
    const [state, setState] = useState({showModal: false})
    const hide = () => {
        setState({
            showModal: false
        })
    }

    return (

        <div>
            <ModelPopUp props={{state, hide}}/>
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
                    <div onClick={() => setState({showModal : true})}>
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