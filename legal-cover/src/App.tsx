import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'


function App() {
  return (
    <BrowserRouter>
    <div className=''>
     <Routes>
       <Route path = "/" Component={HomePage} />
     </Routes>
    </div>
    </BrowserRouter> 
  )
}

export default App
