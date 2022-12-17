import {BrowserRouter,Routes,Route} from"react-router-dom";
import PageProduct from './components/PageProduct/PageProduct';
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/product" element={<PageProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
