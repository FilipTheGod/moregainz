import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
  <div className='bg-black border-b shadow-sm sticky  top-0 z-40'>
  <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgITtI_ApJvppYAizppa6w50Hk284_VfVYg&usqp=CAU" alt="logo" className="h-5 cursor-pointer"/>
    </div>
    <div>
      <ul className='flex space-x-10 text-white'>
        <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
          pathMatchRoute("/") && "text-gray-100 border-b-white"
      }`}
      onClick={() => navigate("/")}
      >
        Home
        </li>
        <li
        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
          (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-gray-100 border-b-white"
      }`}
      onClick={() => navigate("/profile")}
      >
        {pageState}
        </li>
        <li
        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
          pathMatchRoute("/exercises") && "text-gray-100 border-b-white"
      }`}
      onClick={() => navigate("/exercises")}
      >
        Exercises
      </li>
      </ul>
    </div>
  </header>
</div>
  )
}
