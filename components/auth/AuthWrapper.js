import React, { useState } from 'react';
import Head from 'next/head';

import BackgroundSVG from './BackgroundSVG';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthWrapper() {
  const [formToggle, setFormToggle] = useState(true);

  const handleToggle = () => {
    setFormToggle(!formToggle);
  };
  return (
    <div
      className="bg-indigo-600"
      style={{
        minHeight: '100vh',
        height: '100%',
        position: 'relative',
      }}
    >
      <Head>
        <title>SignIn / SignUp</title>
      </Head>
      <BackgroundSVG />
      <div className="flex mt-4 justify-center items-center sm:justify-start w-full">
        <div className="flex flex-col pt-28 sm:pl-8 items-start w-[28rem] ">
          <div className="ml-4">
            <h1 className="text-white font-nunito font-semibold text-sm mt-1">
              Welcome{' '}
              <span className="text-cyan-500">
                {' '}
                <b>!</b>
              </span>
              {', '}
              Nice to see you here.
            </h1>
            {formToggle && (
              <>
                <h1 className="text-white font-nunito my-3 font-bold text-xl">
                  Sign In
                </h1>
                <h1 className="text-white font-nunito font-semibold text-xs">
                  Want to join us?{' '}
                  <span
                    onClick={handleToggle}
                    className="text-cyan-300 cursor-pointer"
                  >
                    Sign Up
                  </span>
                </h1>
              </>
            )}
            {!formToggle && (
              <>
                <h1 className="text-white font-nunito my-3 font-bold text-xl">
                  Create new account<span className="text-cyan-300"> .</span>
                </h1>
                <h1 className="text-white font-nunito font-semibold text-xs">
                  Already a member?{' '}
                  <span
                    onClick={handleToggle}
                    className="text-cyan-300 cursor-pointer"
                  >
                    Sign In
                  </span>
                </h1>
              </>
            )}
          </div>

          {formToggle && <LoginForm />}
          {!formToggle && <RegisterForm />}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
