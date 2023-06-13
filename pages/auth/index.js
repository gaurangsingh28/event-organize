import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Loading from '../../components/ui/Loading';
import AuthWrapper from '../../components/auth/AuthWrapper';

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) return <Loading />;

  return <AuthWrapper />;
}

export default AuthPage;
