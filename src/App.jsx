import SearchBox from './SearchBox';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import BackgroundPage from './BackgroundPage';
function App() {

  return (
    // error in the code
    <>
    <BackgroundPage />
    <Routes>
      <Route path="/"element={<SearchBox />}></Route>
    </Routes>
    </>
  )
}

export default App
