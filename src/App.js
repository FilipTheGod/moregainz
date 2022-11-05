import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import Exercises from './pages/Exercises';


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
