import "./styles.css";
import React, { useState, useEffect } from "react";
import satvocab from "./freesatvocab.json";

export default function App() {
  // console.log(typeof satvocab);
  const wordlist = Object.entries(satvocab);
  const [isNewDay, setIsNewDay] = useState(false);
  // console.log(wordlist);
  // console.log(Array.isArray(wordlist));

  const NewRandomWord = (isNewDay) => {
    if (isNewDay) {
      const random_word = wordlist[Math.floor(Math.random() * wordlist.length)];
      console.log(random_word);
      console.log(Array.isArray(random_word));
      console.log(Object.entries(random_word[1]));
      return random_word[1];
    } else return "";
  };

  return (
    <div className="App">
      <h1>Your word of the day is: {NewRandomWord(true).word}</h1>
      <p>Is it a new day?: {isNewDay ? "yes" : "no"}</p>
      <p>{}</p>
    </div>
  );
}
