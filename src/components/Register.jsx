import React, { useState } from "react";

function Register(props) {

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
      

      props.onAdd(contact);

      event.preventDefault();

      setContact({
        accountName: "",
        email: "",
      });
      
    }

  return (
    <div>
      <h3>以下の内容で登録する</h3>
      <h2>{contact.accountName}</h2>
      <h2>{contact.email}</h2>
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
        <button onClick={submitInfo}>登録する</button>
      </form>
    </div>
  );
}

export default Register;
