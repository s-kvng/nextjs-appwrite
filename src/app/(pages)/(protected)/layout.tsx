"use client"

import useAuth from '@/context/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react'

const ProtectedLayout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const router = useRouter()
    const { authStatus } = useAuth()

    //custom middleware
    if(!authStatus){
        router.replace("/login")
        return <></>;
    }

  return (
    <>
    {children}
    </>
  )
}

export default ProtectedLayout