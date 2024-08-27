import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/HomePage/LandingPage';
import Contactus from './Components/Contactus/Contactus';
import LoginSignUp from './Components/LoginPage/Login';
import Drivers from './Pages/Drivers';
import Mechanics from './Pages/Mechanics';
import Electrcian from './Pages/Electrcian';
import Transporters from './Pages/Transporters';
import CommercialWorkers from './Pages/CommercialWorkers';
import DomesticWorkers from './Pages/DomesticWorkers';
import Plumbers from './Pages/Plumbers';
import Welders from './Pages/Welders';
import DriverSingle from './Singles/DriverSingle';
import CommercialWorkersSingle from './Singles/CommercialWorkersSingle';
import MechanicSingle from './Singles/MechanicSingle';
import ElectrcianSingle from './Singles/ElectrcianSingle';
import TransporterSingle from './Singles/TransporterSingle';
import DomesticWorkersSingle from './Singles/DomesticWorkersSingle';
import PlumberSingle from './Singles/PlumberSingle';
import WelderSingle from './Singles/WelderSingle';
import Cart from './Components/Cart/Cart';
import User from './Components/Users/User';
import StoriesPage from './Components/SuccessStories/StoriesPage';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<LoginSignUp/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contactus' element={<Contactus/>}/>
            <Route path='/usersregistration' element={<User/>}/>
            <Route path='/userstories' element={<StoriesPage/>}/>

            <Route path='/drivers' element={<Drivers/>}/>
               <Route path='/drivers/:name' element={<DriverSingle/>}/>
            <Route path='/mechanics' element={<Mechanics/>}/>
              <Route path='/mechanics/:name' element={<MechanicSingle/>}/>
            <Route path='/electricians' element={<Electrcian/>}/>
                <Route path='/electricians/:name' element={<ElectrcianSingle/>}/>
            <Route path='/transporters' element={<Transporters/>}/>
                <Route path='/transporters/:name' element={<TransporterSingle/>}/>
            <Route path='/commercialworkers' element={<CommercialWorkers/>}/>
                <Route path='/commercialworkers/:name' element={<CommercialWorkersSingle/>}/>
            <Route path='/domesticworkers' element={<DomesticWorkers/>}/>
                <Route path='/domesticworkers/:name' element={<DomesticWorkersSingle/>}/>
            <Route path='/plumbers' element={<Plumbers/>}/>
                <Route path='/plumbers/:name' element={<PlumberSingle/>}/>
            <Route path='/welders' element={<Welders/>}/>
                <Route path='/welders/:name' element={<WelderSingle/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
