import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import ModalBox from './components/Modal/ModalBox';
import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ModalMenu from './components/Modal/ForMenu/ModalMenu';
import ModalMessenger from './components/Modal/ForMessenger/ModalMessenger';

function App() {
  // const [showMenu , setShowMenu ] = useState(false);
  const showMenuHandler = () => {
    // setShowMenu(!showMenu);
  }
  return (
    <Router>
      <div className="container">
        {/* {
          showMenu && <ModalBox />
        } */}
        
        
        <Header onShow={showMenuHandler} />
        <Body />
      </div>
      <Routes>
        <Route path='/menu' element={<ModalMenu />} />
        <Route path='/messenger' element={<ModalMessenger />} />
      </Routes>
    </Router>
  );
}

export default App;
