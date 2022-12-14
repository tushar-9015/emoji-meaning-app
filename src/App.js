import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "ð": "smiling",
  "ð": "winking",
  "ðĪ": "thinking",
  "ð": "eye-roll, frowning",
  "ðī": "sleeping",
  "ð ": "angry",
  "ð": "sad",
  "ð": "kiss",
  "ð": "savouring food",
  "ð": "smirk",
  "ðĪŠ": "Zany",
  "ðĪ": "Money-Mouth",

  "": ""
};

var emojiWeHave = Object.keys(emojiDict);

export default function App() {
  const [emojiName, setEmojiName] = useState("");

  function onEmojiInput(event) {
    var userInput = event.target.value.trim();
    var meaning = emojiDict[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setEmojiName(meaning);
  }

  function clickEmojiHandler(emoji) {
    var meaning = emojiDict[emoji];
    setEmojiName(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Meaning App!</h1>

      <h3>Select an emoji or click on suggested emoticons below</h3>

      <input onChange={(e) => onEmojiInput(e)}></input>

      <p> Meaning: {emojiName}</p>

      <h1>emojis we know:</h1>
      {emojiWeHave.map(function (emoji, idx) {
        return (
          <span key={idx} onClick={() => clickEmojiHandler(emoji)}>
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
