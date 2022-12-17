import {HashRouter,Routes,Route} from"react-router-dom";
import PageProduct from './components/PageProduct/PageProduct';
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/product" element={<PageProduct/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;