import React from "react";

function Home(props) {

  function toRegister(){
    props.goToRegister(true)
  }

  function toLogin() {
    props.goToLogin(true);
  }

  return (
    <div class="home">
      <button onClick={toRegister} class="registerButton">
        Register
      </button>
      <button onClick={toLogin} class="loginButton">
        Login
      </button>
    </div>
  );
}

export default Home;
