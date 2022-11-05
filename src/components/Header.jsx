import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  function pathRoute (path) {
    if (location.pathname === path) {
      return 'active' //true
    }
    }

  return (
  <div className='bg-black border-b shadow-sm sticky  top-0 z-50'>
  <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgITtI_ApJvppYAizppa6w50Hk284_VfVYg&usqp=CAU" alt="logo" className="h-5 cursor-pointer"/>
    </div>
    <div>
      <ul className='flex space-x-10 text-white'>
        <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathRoute("/") && "text-gray-100 border-b-white"
      }`}
      onClick={() => navigate("/")}
      >
        Home
        </li>
        <li
        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathRoute("/sign-in") && "text-gray-100 border-b-white"
      }`}
      onClick={() => navigate("/sign-in")}
      >
        Sign In
        </li>
        <li
        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathRoute("/exercises") && "text-gray-100 border-b-white"
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
