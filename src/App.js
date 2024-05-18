import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import Header from './component/layout/Header/Header';
import Home from "./component/Home/Home";
import SignUp from './components/Signup';
import Admindashboard from './components/DashBoard/Admindashboard';
import { Empdashboard } from './components/Empdashboard/Empdashboard';
import { Notfound } from './components/Notfound';
import Vapt from './component/Other/Vapt';
import Inhouse from './component/Other/Inhouse';
import CyberSecurity from './component/Other/CyberSecurity';
import Other from './component/Other/Other';
import Fullstack from './component/fullstack/Fullstack';
import Datascience from './component/datascience/Datascience';
import Humanresource from './component/Human resourcs/Humanresource';
<<<<<<< HEAD
import Udemy from './component/Udemy/Udemy';
import Footer from './component/layout/Footer/Footer';
import TC from './component/Other/TC';
import Book from './component/layout/bookmeeting';
=======
<<<<<<< HEAD
import Udemy from './component/Udemy/Udemy';
import Footer from './component/layout/Footer/Footer'
import TC from './component/Other/TC'
import Book from './component/layout/bookmeeting';

=======
>>>>>>> d8da131a4f02e1d2712ecb387a22d16de5d4e8cf

>>>>>>> 5357168211ffcf612ed88ca5e90da4352ef3a81a

function App() {
  const adminPath = "/dashboard/admin";
  const userPath = "/dashboard/user";

  const isDashboardPath = window.location.pathname.startsWith(adminPath) || window.location.pathname.startsWith(userPath);


  return (
    <Provider store={store}>
      <Router>
         <Header />
        <div className='p-0 m-0'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignUp />} />
            <Route path="/vapt" element={<Vapt />} />
            <Route path="/In-house" element={<Inhouse />} />
<<<<<<< HEAD
            <Route path="/udemy" element={<Udemy />} />
            <Route path="/dashboard/admin" element={<Admindashboard />} />
=======
<<<<<<< HEAD
            < Route path="/udemy" element={<Udemy />} />
            < Route path="/dashboard/admin" element={<Admindashboard />} />
=======
        < Route path="/dashboard/admin" element={<Admindashboard />} />
>>>>>>> d8da131a4f02e1d2712ecb387a22d16de5d4e8cf
>>>>>>> 5357168211ffcf612ed88ca5e90da4352ef3a81a
            <Route path="/dashboard/user" element={<Empdashboard />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/other" element={<Other />} />
            <Route path="/course/cybersecurity" element={<CyberSecurity />} />
            <Route path="/course/fullstack" element={<Fullstack />} />
            <Route path="/course/datascience" element={<Datascience />} />
            <Route path="/course/humanresource" element={<Humanresource />} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5357168211ffcf612ed88ca5e90da4352ef3a81a
            <Route path='/tc' element={<TC />} />
            <Route path='/book' element={<Book />} />
          </Routes>
        </div>
<<<<<<< HEAD
        {!isDashboardPath && <Footer />}
=======
        <Footer />
=======
          </Routes>
        </div>
>>>>>>> d8da131a4f02e1d2712ecb387a22d16de5d4e8cf
>>>>>>> 5357168211ffcf612ed88ca5e90da4352ef3a81a
      </Router>
    </Provider>
  );
}

export default App;
