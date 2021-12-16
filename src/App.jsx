import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Routes/Layout';
import Main from './Routes/Main';
import Myhome from './Routes/Myhome';
import HowItWorks from './Routes/HowItWorks';
export default function App () { 
    return ( 
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path='myhome' element={<Myhome/>}/>
                <Route path='howitworks' element={<HowItWorks/>}/>
            </Route>
            
        </Routes>
    </BrowserRouter>
    )
}