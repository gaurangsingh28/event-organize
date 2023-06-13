import React, { useState, useRef, useEffect } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BadgeIcon from '@mui/icons-material/Badge';
import Notification from '../ui/Notification';
import Loader from '../ui/Loader';

function RegisterForm() {
  const [institutes, setInstitutes] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [notification, setNotification] = useState(false);
  const [resp, setResp] = useState({});
  const [userType, setUserType] = useState('student');
  const [eyeOpen, setEyeOpen] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  useEffect(() => {
    async function getInstitutes() {
      const response = await fetch('/api/institutes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setInstitutes(data.institutes);
    }
    getInstitutes();
  }, []);

  const handleToggle = () => {
    setEyeOpen(!eyeOpen);
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };
  const handleUserType = (newType) => {
    setUserType(newType);
  };

  const signup = async (formData) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  };

  const firstNameRef = useRef(null);
  const instituteRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = async (e) => {
    setShowLoader(true);
    e.preventDefault();
    setNotification(false);
    setResp({});
    let form_data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (userType === 'student') {
      form_data.first_name = firstNameRef.current.value;
      form_data.last_name = lastNameRef.current.value;
      form_data.is_student = true;
      form_data.is_institute = false;
    } else {
      form_data.institute_name = instituteRef.current.value;
      form_data.is_student = false;
      form_data.is_institute = true;
    }
    const response = await signup(form_data);
    const data = await response.json();
    setNotification(true);
    setResp(data);
    setShowLoader(false);
  };

  return (
    <>
      {notification && (
        <Notification message={resp.message ?? ''} status={resp.status ?? ''} />
      )}

      <form onSubmit={submitHandler} className="flex flex-col w-full mt-2 pl-2">
        {/* user Type */}
        <div className="flex gap-5 mb-2 w-72 sm:w-96 px-2 py-2 ">
          <div className=" flex justify-center items-center gap-2">
            <input
              type="radio"
              onChange={() => handleUserType('student')}
              className="radio border-white radio-xs checked:bg-indigo-600 m-0"
              id="student"
              name="user_type"
              value="student"
              checked={userType === 'student'}
            />
            <label
              htmlFor="student"
              className="text-xs font-semibold text-zinc-200 cursor-pointer"
            >
              Student
            </label>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="radio"
              onChange={() => handleUserType('institute')}
              className="radio border-white  radio-xs checked:bg-indigo-600"
              id="institute"
              name="user_type"
              value="student"
              checked={userType === 'institute'}
            />
            <label
              htmlFor="institute"
              className="text-xs font-semibold text-zinc-200 cursor-pointer"
            >
              Insitute
            </label>
          </div>
        </div>

        {/* Institute Selection */}
        {userType === 'institute' && (
          <div className="flex gap-1 bg-indigo-500 shadow-2xl w-72 sm:w-96 px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Institute Authorization
              </h6>

              <select
                name="institute"
                ref={instituteRef}
                defaultValue=""
                id="institute_filter"
                required={userType === 'institute' ? true : false}
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
              >
                <option value="" disabled className="bg-white text-indigo-600">
                  Select Institute
                </option>
                {institutes.map((institute) => (
                  <option
                    className="bg-white text-indigo-600"
                    value={institute.name}
                    key={institute.id}
                  >
                    {institute.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* name */}
        {userType === 'student' && (
          <div className="flex flex-col sm:justify-between sm:gap-1 sm:flex-row w-96">
            <div className="flex gap-1 bg-indigo-500 shadow-2xl w-72 sm:w-[12rem] px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  First Name
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="text"
                  ref={firstNameRef}
                  name="first_name"
                  minLength="3"
                  required={userType === 'student' ? true : false}
                  id="first_name"
                />
              </div>
              <div className="flex justify-center items-center">
                <BadgeIcon sx={{ color: 'white', fontSize: '20px' }} />
              </div>
            </div>
            {/* lastName */}
            <div className="flex gap-1 mt-4 sm:mt-0 bg-indigo-500 shadow-2xl w-72 sm:w-[12rem] px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Last Name
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="text"
                  required={userType === 'student' ? true : false}
                  ref={lastNameRef}
                  name="last_name"
                  minLength="3"
                  id="last_name"
                />
              </div>
              <div className="flex justify-center items-center">
                <BadgeIcon sx={{ color: 'white', fontSize: '20px' }} />
              </div>
            </div>
          </div>
        )}

        {/* email */}
        <div className="flex gap-1 mt-4 bg-indigo-500 shadow-2xl w-72 sm:w-96 px-2 py-2 rounded-xl">
          <div className="grow">
            <h6 className="text-xs font-semibold text-zinc-200 mb-1">
              Email Address
            </h6>
            <input
              className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
              type="email"
              required
              ref={emailRef}
              title="Email should be of NIT"
              pattern="^[a-zA-Z0-9+_.-]+@nit[a-z].edu.in$"
              name="email"
              id="email"
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
              className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
              type={passwordType}
              name="password"
              minLength="6"
              required
              ref={passwordRef}
              id="password"
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
            className="bg-indigo-400 flex justify-center gap-2 items-center w-full sm:py-3 hover:scale-95 hover:drop-shadow-2xl hover:bg-white hover:text-indigo-500 transition-all duration-500 ease-in-out border-0 outline-none tracking-widest rounded-3xl text-center font-semibold px-5 py-2 overflow-hidden uppercase text-white"
          >
            Register
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

export default RegisterForm;
