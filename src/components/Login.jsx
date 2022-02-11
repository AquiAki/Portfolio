import React, { useState } from "react";

function Login(props) {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
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
    props.onAdd(contact);
    setContact({
      fName: "",
      lName: "",
      email: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <h3> すでに登録した名前、パスワード、emailアドレスでログインする</h3>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button onClick={submitInfo}>Login</button>
      </form>

    </div>
  );
}

export default Login;
