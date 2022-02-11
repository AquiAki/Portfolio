import React, { useState } from "react";

function Register(props) {

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
      <h3>~以下の内容で登録する~</h3>
      <h2>{contact.fName} {contact.lName}</h2>
      <h2>{contact.email}</h2>
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
        <button onClick={submitInfo}>Submit</button>
      </form>
    </div>
  );
}

export default Register;
