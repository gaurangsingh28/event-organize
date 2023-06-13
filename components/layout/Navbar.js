import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

import MenuIcon from '../icons/MenuIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NavbarLink from '../ui/NavbarLink';

function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [toggle, setToggle] = useState('hidden');
  const base = [
    { id: 1, url: '/', title: 'Home' },
    { id: 2, url: '/events', title: 'Events' },
    { id: 4, url: '/contact', title: 'Contact' },
  ];
  const [links, setLinks] = useState(base);
  const handleDropdown = () => {
    setToggle(toggle === 'hidden' ? 'block' : 'hidden');
  };
  const logoutHandler = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: `${window.location.origin}/auth`,
    });
    setLinks(base);
    router.replace(data.url);
  };

  useEffect(() => {
    if (session?.user?.name?.is_student) {
      setLinks([...base, { id: 3, url: '/auth/student', title: 'Dashboard' }]);
    } else if (session?.user?.name?.is_institute) {
      setLinks([
        ...base,
        { id: 5, url: '/auth/institute', title: 'Institute' },
      ]);
    } else if (session?.user?.name?.is_admin) {
      setLinks([
        ...base,
        { id: 5, url: '/auth/admin/dashboard', title: 'Admin' },
      ]);
    }
  }, [session]);

  return (
    <>
      <nav className="sticky bg-white inset-x-0 h-16 top-0 navbar z-50 shadow-xl text-neutral-900 rounded-b-xl">
        <div className="px-2 mx-2 navbar-start bg-transparent">
          <span className="text-lg text-indigo-600 tracking-wider font-bold">
            EventsForYou
          </span>
        </div>
        <div className="hidden transition-all ease-in-out px-2 mx-2 navbar-center md:flex">
          <div className="flex items-stretch space-x-2">
            {links.map((item) => (
              <NavbarLink
                key={item.id}
                url={item.url}
                title={item.title}
                className="btn btn-ghost text-indigo-700 hover:bg-indigo-600 hover:text-white btn-sm font-bold rounded-btn"
              />
            ))}
          </div>
        </div>
        <div className="flex transition-all ease-in-out md:hidden navbar-end">
          <div className="dropdown absolute flex justify-end w-full dropdown-end">
            <div
              id="dropdown"
              className={`${toggle} p-2  z-50 absolute transition-all ease-in-out shadow flex-col mt-16 w-1/2 bg-white rounded-box`}
            >
              <div className="flex justify-start pl-1 btn-md w-full rounded-btn">
                {!session?.user && (
                  <Link href="/auth" className="btn btn-circle btn-ghost">
                    <a>
                      <AccountCircleIcon
                        key="circle_1"
                        sx={{ fontSize: '2.2rem' }}
                        className="text-indigo-700"
                      />
                    </a>
                  </Link>
                )}
                {session?.user && (
                  <button
                    onClick={logoutHandler}
                    className="btn btn-circle hover:bg-transparent btn-ghost"
                  >
                    <LogoutIcon
                      key="circle_2"
                      sx={{ fontSize: '2.2rem' }}
                      className="text-indigo-700"
                    />
                  </button>
                )}
              </div>

              {links.map((item) => (
                <div key={item.id}>
                  <NavbarLink
                    url={item.url}
                    title={item.title}
                    className="btn text-indigo-700 hover:text-white hover:bg-indigo-600 bg-transparent border-0 flex justify-start btn-md w-full font-bold rounded-btn"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleDropdown}
              className="btn btn-square bg-white border-0 hover:bg-indigo-600 text-indigo-700 hover:text-white"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex navbar-end">
          {!session?.user && (
            <Link href="/auth" className="btn btn-circle btn-ghost">
              <a>
                <AccountCircleIcon
                  key="circle_2"
                  sx={{ fontSize: '2.2rem' }}
                  className="text-indigo-700"
                />
              </a>
            </Link>
          )}
          {session?.user && (
            <button
              onClick={logoutHandler}
              className="btn btn-circle hover:bg-transparent btn-ghost"
            >
              <LogoutIcon
                key="circle_2"
                sx={{ fontSize: '2.2rem' }}
                className="text-indigo-700"
              />
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
