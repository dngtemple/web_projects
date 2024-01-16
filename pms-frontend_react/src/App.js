import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Products from './components/Products';

function App() {
  

  return (
    <div className="App">
      {/* <Products /> */}

      {/* <Create/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
