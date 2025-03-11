import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';


import Home from "./pages/Home/Home"
import MobileHome from "./pages/Home/MobileHome"
import Info from './pages/Info/Info';
import Praesidium from './pages/Praesidium/Praesidium';
import Kalender from './pages/Kalender/Kalender';
import Sponsors from './pages/Sponsors/Sponsors';
import ProPraesidia from './pages/ProPraesidia/ProPraesidia';
import MobileInfo from './pages/Info/MobileInfo';
import MobileKalender from './pages/Kalender/MobileKalender';
import MobilePraesidium from './pages/Praesidium/MobilePraesidium';
import MobileProPraesidia from './pages/ProPraesidia/MobileProPraesidia';
import MobileSponsors from './pages/Sponsors/MobileSponsors';
import Vacatures from './pages/Vacatures/Vacatures';
import MobileVacatures from './pages/Vacatures/MobileVacatures';
import Secret from './pages/Secret/Secret';


function App() {

  const isMobile = useMediaQuery({ maxWidth: 1090 });

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={isMobile ? <MobileHome/> : <Home />}/>
        <Route  exact path="/Info"  element={isMobile ? <MobileInfo/> : <Info />}/>
        <Route  exact path="/Praesidium"  element={isMobile ? <MobilePraesidium/> : <Praesidium />}/>
        <Route  exact path="/Pro-Praesidia"  element={isMobile ? <MobileProPraesidia/> : <ProPraesidia />}/>
        <Route  exact path="/Kalender"  element={isMobile ? <MobileKalender/> : <Kalender />}/>
        <Route  exact path="/Sponsors"  element={isMobile ? <MobileSponsors/> : <Sponsors />}/>
        {/*<Route  exact path="/Vacatures"  element={isMobile ? <MobileVacatures/> : <Vacatures />}/>*/}
        <Route  exact path="/supersecretjagerboipaginasheesh"  element={isMobile ? <MobileHome/> : <Secret />}/>
      </Routes>

    </Router>
  );
};
 
export default App;
