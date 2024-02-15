import React, { useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [note, setnote] = useState([]);

  const addNote = (Notes) => {
    setnote((prevContent) => {
      return [...prevContent, Notes];
    });
  };

  const removeNote = (id) => {
    setnote((notearr) =>
      notearr.filter((data, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passnote={addNote} />
      <div className="NoteBack">
        {note.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deletenote={removeNote}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
