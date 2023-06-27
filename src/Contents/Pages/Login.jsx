import React from 'react';
import Logo from '../../assets/Images/logo.png';
import LoginIcon from '../../assets/SVGs/login.svg'

const Login = () => {
  return (
    <div className="login-image ">
        <img src={Logo} alt="logo" className="p-4"></img>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-slate-300 bg-opacity-80 w-auto rounded-3xl p-8 mx-auto flex flex-col items-center justify-center max-w-xs">
          <img src={LoginIcon} alt="hello" className="w-1/3 h-1/3"></img>
          <div className="mt-5">
            <div>
              <div className="font-extrabold text-2xl">
                Login
              </div>
              <div className="bg-sky-700 bg-opacity-30 rounded-3xl p-7 pb-10 mt-2">
                <div className="text-sm">
                  Email Address
                </div>
                <input className="rounded-xl">
                </input>
                <div className="text-sm mt-2">
                  Mobile Number
                </div>
                <input className="rounded-xl">
                </input>
                <div className="text-sm float-right mt-3 bg-green-300 opacity-60 rounded-xl px-2 hover:cursor-pointer hover:ring-2 hover:ring-offset-2 hover:duration-300 hover:ring-black">
                   Submit
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> 
    </div>
  )
}

export default Login;