import React, { useState, useRef, useEffect } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Notification from '../ui/Notification';
import Loader from '../ui/Loader';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function LoginForm() {
  const router = useRouter();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [showLoader, setShowLoader] = useState(false);
  const [notification, setNotification] = useState(false);
  const [resp, setResp] = useState({});
  const [eyeOpen, setEyeOpen] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const handleToggle = () => {
    setEyeOpen(!eyeOpen);
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const submitHandler = async (e) => {
    setNotification(false);
    setShowLoader(true);
    setResp({});
    e.preventDefault();
    const form_data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const result = await signIn('credentials', {
      redirect: false,
      ...form_data,
    });
    if (result.error) setResp({ message: result.error, status: 'fail' });
    else setResp({ message: 'Login Successful!', status: 'success' });
    setNotification(true);
    setShowLoader(false);

    const s = await getSession();
    if (s?.user) {
      const next = s?.user?.name?.is_student
        ? '/auth/student'
        : '/auth/institute';
      router.push(next);
    }
  };

  return (
    <>
      {notification && (
        <Notification message={resp.message ?? ''} status={resp.status ?? ''} />
      )}
      <form
        onSubmit={submitHandler}
        className="flex flex-col login-form w-full mt-3 pl-2"
      >
        {/* email */}
        <div className="flex gap-1 bg-indigo-500 shadow-2xl w-72 sm:w-96 px-2 py-2 rounded-xl">
          <div className="grow">
            <h6 className="text-xs font-semibold text-zinc-200 mb-1">
              Email Address
            </h6>
            <input
              ref={emailRef}
              className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
              type="email"
              name="email"
              id="email"
              // title="Email should be of @nitk.edu.in"
              // pattern="^[a-zA-Z0-9+_.-]+@nitk.edu.in$"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <AlternateEmailIcon sx={{ color: 'white', fontSize: '20px' }} />
          </div>
        </div>
        {/* Password */}
        <div className="flex gap-1 bg-indigo-500 mt-4 shadow-2xl w-72 sm:w-96 px-2 py-2 rounded-xl">
          <div className="grow">
            <h6 className="text-xs font-semibold text-zinc-200 mb-1">
              Password
            </h6>
            <input
              ref={passwordRef}
              className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
              type={passwordType}
              name="password"
              id="password"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            {eyeOpen && (
              <VisibilityIcon
                onClick={handleToggle}
                sx={{ color: 'white', fontSize: '20px', cursor: 'pointer' }}
              />
            )}
            {!eyeOpen && (
              <VisibilityOffIcon
                onClick={handleToggle}
                sx={{ color: 'white', fontSize: '20px', cursor: 'pointer' }}
              />
            )}
          </div>
        </div>
        {/* Login Button */}
        <div className="mt-4 w-36 sm:w-48 rounded-3xl shadow-2xl">
          <button
            type="submit"
            className="bg-indigo-400 flex justify-center gap-2 items-center  w-full sm:py-3 hover:scale-95 hover:drop-shadow-2xl hover:bg-white hover:text-indigo-500 transition-all duration-500 ease-in-out border-0 outline-none tracking-widest rounded-3xl text-center font-semibold px-5 py-2 uppercase text-white"
          >
            Login
            {showLoader && (
              <span>
                <Loader />
              </span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
