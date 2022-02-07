import LoginForm from "../../components/LoginForm/LoginForm";
import {useState} from "react";
import 'antd/dist/antd.css';

import SignUpForm from "../../components/SignUpForm/SignUpForm";

function AuthPage({ setUser, hasAccount }) {

  return (
    <main>
      {hasAccount ?
      <LoginForm setUser={setUser} />
      :
      <>
      <SignUpForm setUser={setUser} />
      </>
    }
    </main>
  )
}

export default AuthPage;