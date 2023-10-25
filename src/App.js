import "./styles.css";
import React, { useState } from "react";
import satvocab from "./freesatvocab.json";

// initial input values
const initialValues = {
    wordnum: "",
    infotype: "word"
  };


export default function App() {
  const wordlist = Object.entries(satvocab);
  // console log to determine what that wordlist actually looks like:
  // console.log(wordlist);
  // console.log(wordlist.length);
  // console.log(wordlist[1]);
  // console.log(wordlist[1][1].word);


  const [values, setValues] = useState(initialValues);
  const [result, setResult] = useState();

  const handleWordChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function wordDisplay(data) {
    const wordnum = data.wordnum;
    // const random_word = wordlist[Math.floor(Math.random() * wordlist.length)];
    const wordSet = wordlist.slice(0, wordnum);
    const infotype = data.infotype;
    let displayWords = "";
    if (infotype === "word") {
      displayWords = wordSet.map(([num, word]) =>
        <li key={num}>{word.word}</li>
      );
    } else if (infotype === "def") {
      displayWords= wordSet.map(([num, word]) =>
        <li key={num}>{word.definition}</li>
      );
    } else {
      displayWords = wordSet.map(([num, word]) =>
        <li key={num}>
          {word.word}
          <br></br>
          {word.definition}
        </li>
      );
    }
    return (
      <ul>{displayWords}</ul>
    );
  }
  const submitHandler = (e) => {
    wordDisplay(values);
    e.preventDefault();
  };



  return (
    <div className="App">
      <form>
        <input
          value={values.wordnum}
          onChange={handleWordChange}
          name="wordnum"
          label="numberofwords"
          placeholder="Enter Number of Words"
        />
        <div>
          <h3>Vocab Display Options:</h3>
          <label>
            <input
              type="radio"
              name="infotype"
              value="word"
              checked={values.infotype === "word"}
              onChange={handleWordChange}
            />
            Word Only
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="infotype"
              value="def"
              checked={values.infotype === "def"}
              onChange={handleWordChange}
            />
            Definition Only
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="infotype"
              value="both"
              checked={values.infotype === "both"}
              onChange={handleWordChange}
            />
            Both
          </label>
        </div>

        <button type="submit" onClick={submitHandler}> Get Vocab </button>
      </form>
    </div>
  );
}
