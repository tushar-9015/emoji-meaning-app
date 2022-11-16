import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😊": "smiling",
  "😉": "winking",
  "🤔": "thinking",
  "🙄": "eye-roll, frowning",
  "😴": "sleeping",
  "😠": "angry",
  "😞": "sad",
  "😘": "kiss",
  "😋": "savouring food",
  "😏": "smirk",
  "🤪": "Zany",
  "🤑": "Money-Mouth",

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
