import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSession, signIn } from 'next-auth/react';
import Loading from '../../../components/ui/Loading';

function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleAdminLogin = async (e) => {
    setError(null);
    e.preventDefault();
    const form_data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      is_admin: true,
    };
    const result = await signIn('credentials', {
      redirect: false,
      ...form_data,
    });
    if (result.error) setError(result.error);
    else {
      const s = await getSession();
      if (s?.user) {
        const next = '/auth/admin/dashboard';
        router.push(next);
      }
    }
  };

  useEffect(() => {
    getSession().then((session) => {
      if (session && session.user?.name?.is_admin) {
        router.replace('/auth/admin/dashboard');
      } else if (session && !session.user?.name?.is_admin) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Head>
        <title>Administration</title>
      </Head>
      <div className="w-[85%] mx-auto mt-5">
        <h1 className="uppercase text-center font-montserrat">Admin Login</h1>
      </div>
      <form
        onSubmit={handleAdminLogin}
        className="bg-white mx-auto w-[85%] sm:w-[65%] md:w-[45%] shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        {error && <h4 className="text-red-600">{error}</h4>}
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="email"
            placeholder="Email address"
            ref={emailRef}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="*********"
            ref={passwordRef}
            minLength="6"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-600 hover:scale-95 transition-all ease-in duration-100 text-white tracking-wider font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
