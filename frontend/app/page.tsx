
"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import LandingPage from "../component/layout/landingPage";
import SignIn from "./login/page";


const page = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <LandingPage/>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
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