import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Header } from './Components/Header/Header'
import { Erro } from './pages/Erro'
import { Filme } from './pages/Filme'
import { Home } from './pages/Home'

export function RoutesApp(){
    return(
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/filme/:id' element={<Filme/>}/>
        <Route path='*'  element={<Erro/>}/>
   </Routes>
    </BrowserRouter>
    )
}