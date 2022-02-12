import React, { useState } from "react";

function Login(props) {
  const [contact, setContact] = useState({
    accountName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitInfo(event) {
    
    props.toNote(true);
    
    // props.onAdd(contact);

    　
    setContact({
      accountName: "",
      email: "",
    });
    
   
  }

  return (
    <div>
      <h3> すでに登録したアカウント名、メールアドレスでログインする</h3>
      <form>
        <input
          onChange={handleChange}
          name="accountName"
          value={contact.accountName}
          placeholder="アカウント名"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="メールアドレス"
        />
        <button onClick={submitInfo}>ログイン</button>
      </form>
    </div>
  );
}

export default Login;
