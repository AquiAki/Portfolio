import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [infos, setInfos] = useState({});
    const [isHome, setIsHome] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [notes, setNotes] = useState([]);
    const [isTrue, setIsTrue] = useState(false);

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

    function goToNote(c){
      setIsTrue(c)
      setIsLogin(false)
      setIsHome(true)
    }

    function addNote(newNote) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }

    function deleteNote(id) {
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }

  return (
    <div>
      <Header />
      <div className="container">
        {!isHome && <Home goToRegister={goRegister} goToLogin={goLogin} />}

        {isRegistered && <Register />}
        {isLogin && <Login toNote={goToNote} />}

        {isTrue && <CreateArea onAdd={addNote} />}
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
