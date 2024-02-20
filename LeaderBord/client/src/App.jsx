import Create from './components/Create'
import './css/App.css'
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import NotFound from './components/NotFound';

import Bord from "./components/Bord"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create/>} />
          <Route path='/bord' element={<Bord/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
