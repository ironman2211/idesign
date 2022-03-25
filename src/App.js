
import './App.css';
// import styled from 
import Header from './components/header.js'
import Confirmation from './components/confirmation.js'
import Process from './components/process.js'
import ZoomConsult from'./components/zoomConsult';
import ZoomConsultOne from './components/zoomConsultOne';
import ZoomConsultTwo from './components/zoomConsultTwo';
import Completed from './components/completed';
import Subscription from './components/subscription';
import Dashbord from './components/dashbord';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path='/' element={<Confirmation/>}></Route>
       <Route path='/process' element={<Process/>}></Route>
       <Route exact path="/zoom" element={<ZoomConsult />} />
       <Route exact path="/zoom/one" element={<ZoomConsultOne />} />
          <Route exact path="/zoom/two" element={<ZoomConsultTwo />} />
          <Route exact path="/complete" element={<Completed />} />
          <Route exact path="/complete/subscription" element={<Subscription />} />
          <Route exact path="/dashbord" element={<Dashbord />} />
      </Routes>
    </div>
  );
}

export default App;
