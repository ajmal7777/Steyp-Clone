// Images
import logo from './logo.svg';

// Styles
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

//Includes
import NavBar from './components/screens/includes/NavBar';

//Packages
import {Helmet} from "react-helmet";
import Dashboards from './components/Dashboard/Dashboards';
import LandingPage from './components/screens/LandingPage';
import FullDashboard from'./components/MainDashboard/FullDashboard';
import Achievments from './components/MainDashboard/Achievments';
import Learning from './components/MainDashboard/Learning';
import Practice from './components/MainDashboard/Practice';
import Workshops from './components/MainDashboard/Workshops';
import Assesments from './components/MainDashboard/Assesments';
import NewContent from './components/MainDashboard/NewContent';
import Certification from './components/MainDashboard/Certification';
import Challenge from './components/Dashboard/Challenge';
import FreeGround from './components/Dashboard/FreeGround';
import Chat from './components/Dashboard/Chat';
function App() {
  return (
    <>
    <Helmet>
      <title>Steyp | An EdTech Company for Students to become skilled Software Engineers</title>
      <link rel="stylesheet" type='image/png' href={require("../src/components/assets/images/steyp/favicon-32x32.ico")} />
    </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/dashboards" element={<Dashboards />}/>
          <Route path="/fulldashboard" element={<FullDashboard />}/>
          <Route path="/dashboard" element={<FullDashboard />}/>
          <Route path="/learning" element={<Learning />}/>
          <Route path="/practice" element={<Practice />}/>
          <Route path="/workshops" element={<Workshops />}/>
          <Route path='/assesments' element={<Assesments />}/>
          <Route path='/newcontent' element={<NewContent />}/>
          <Route path='/certification' element={<Certification />}/>  
          <Route path='/challenge' element={<Challenge />} /> 
          <Route path='/freeground' element={<FreeGround />} /> 
          <Route path='/chat' element={<Chat />} /> 
          
        </Routes>
      </Router>
   
    </>
   
  );
}

export default App;
