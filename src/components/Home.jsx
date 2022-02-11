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
      <button onClick={toRegister}>Register</button>
      <button onClick={toLogin}  class="homeButton">
        Login
      </button>
    </div>
  );
}

export default Home;
