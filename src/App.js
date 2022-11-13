import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Home from './pages/Home';
import styled from "styled-components";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import Loader from "../src/components/Loader";
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import ExercisePage from './pages/ExercisePage';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";



const App = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Router>
      {loaded ? (
        <Loader />
      ) : (
        <Section>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/exercises" element={<ExercisePage />} />
          <Route path={`/exercise/:id`} element={<ExerciseDetail />} />
        </Routes>
        <Footer />
        </Section>
        )}
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  );
}

const Section = styled.section``;
export default App;