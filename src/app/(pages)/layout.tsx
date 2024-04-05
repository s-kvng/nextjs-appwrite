"use client"

import appwriteService from "@/appwrite/config"
import Header from "@/components/Header"
import Blog from "@/components/Blog"
import { AuthProvider } from "@/context/authContext"
import React, { useState, useEffect } from "react";

export default function ProtectedLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [authStatus, setAuthStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        appwriteService.loggedIn()
        .then(setAuthStatus)
        .finally(()=>setLoading);
    }, [])

    
    return (
        <AuthProvider value={{authStatus, setAuthStatus}} >
            {
                !loading && (
                    <>
                        <div className="text-primary">
                            <div className="fixed -z-[1] left-1/3 w-12 top-2/3 blur-2xl">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-2/3 w-12 top-1/3 blur-2xl">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-1/4 w-40 top-1/4 blur-2xl opacity-50">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-1/2 w-32 top-1/2 blur-2xl opacity-60">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-[45%] w-12 top-1/3 blur-2xl">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-3/4 w-60 top-1/3 opacity-20 blur-2xl">
                                <Blog blur />
                                <div className="text-primary">
                            <div className="fixed -z-[1] left-1/3 w-12 top-2/3 blur-2xl">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-2/3 w-12 top-1/3 blur-2xl">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-1/4 w-40 top-1/4 blur-2xl opacity-50">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-1/2 w-32 top-1/2 blur-2xl opacity-60">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-[45%] w-12 top-1/3 blur-2xl">
                                <Blog blur />
                            </div>
                            <div className="fixed -z-[1] left-3/4 w-60 top-1/3 opacity-20 blur-2xl">
                                <Blog blur />
                            </div>
                        </div>
                        </div>
                        </div>
                        <Header />
                        <main className="px-2 py-4">{children}</main>
                    </>
                )
            }
        </AuthProvider>
    );
  }