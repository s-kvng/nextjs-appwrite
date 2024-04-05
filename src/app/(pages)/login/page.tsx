"use client"

import React from 'react'
import useAuth from "@/context/useAuth"
import { useRouter } from "next/navigation"
import Login from '@/components/Login'


const LoginPage = () => {

    const router = useRouter()
    const {authStatus} = useAuth()

    if (authStatus){
        router.push("/profile")
        return <></>;
    }
  return (
        <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 ;g:py-24">
            <Login />
        </section>
  )
}

export default LoginPage