
"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import SignIn from "./login/page";
import Registration from "./register/page";


const page = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button> */}
      </>
    ) 
  }
  return (
    <>
    <SignIn />
    </>
  )
}

export default page