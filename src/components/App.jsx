import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

function App() {
    const [infos, setInfos] = useState({});
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    function addInfo(newInfos) {
      setInfos((prevInfos) => {
        return {...prevInfos, newInfos};
      });
    }

    function goRegister(boolean) {
      setIsRegistered(boolean);
      setIsLogin(false);
    }

    function goLogin(boolean) {
      setIsLogin(boolean);
      setIsRegistered(false)
    }

  return (
    <div className="container">
      <Header />
      <Home 
        goToRegister={goRegister}
        goToLogin={goLogin} 
       />
      {/* {!isRegistered && <Home goToRegister={goRegister} />} */}
      {/* {!isLogin && <Home goToLogin={goLogin} />} */}
      {isRegistered && <Register />}
      {isLogin && <Login />}
      {/* <Register 
      onAdd={addInfo}
    />  */}
      <Footer />
    </div>
  );
}

export default App;
