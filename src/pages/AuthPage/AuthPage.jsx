import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import {useState} from "react";

function AuthPage({ setUser, hasAccount }) {

  return (
    <main>
      <h1>AuthPage</h1>
      {hasAccount ?
      <LoginForm setUser={setUser} />
      :
      <SignUpForm setUser={setUser} />
    }
    </main>
  )
}

export default AuthPage;