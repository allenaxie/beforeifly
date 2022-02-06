import LoginForm from "../../components/LoginForm/LoginForm";
import {useState} from "react";
import 'antd/dist/antd.css';

import SignUpForm2 from "../../components/SignUpForm/SignUpForm2";

function AuthPage({ setUser, hasAccount }) {

  return (
    <main>
      {hasAccount ?
      <LoginForm setUser={setUser} />
      :
      <>
      <SignUpForm2 setUser={setUser} />
      </>
    }
    </main>
  )
}

export default AuthPage;