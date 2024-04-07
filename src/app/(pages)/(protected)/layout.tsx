"use client"

import useAuth from '@/context/useAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProtectedLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const router = useRouter()
// Fetch initial auth status from context
const { authStatus } = useAuth();

// Store auth status in state for conditional rendering
const [isAuthenticated, setIsAuthenticated] = useState(authStatus);

    //custom middleware
    useEffect(() => {
      // Perform redirection if user is not authenticated
      if (!isAuthenticated) {
        router.replace('/login');
      }
    }, [isAuthenticated, authStatus]); // Run the effect when authStatus changes


    return (
      <div>
        {isAuthenticated ? (
          <>
            {children}
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }

export default ProtectedLayout