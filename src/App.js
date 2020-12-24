import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🥰": "smiling face with hearts",
  "😍": "smiling face with heart-eyes",
  "🤩": "star-struck",
  "😘": "face blowing a kiss",
  "😗": "kissing face",
  "☺️": "smiling face",
  "☺": "smiling face",
  "😚": "kissing face with closed eyes",
  "😙": "kissing face with smiling eyes",
  "😋": "face savoring food",
  "😛": "face with tongue",
  "😜": "winking face with tongue",
  "🤪": "zany face",
  "😝": "squinting face with tongue",
  "🤗": "hugging face",
  "🤭": "face with hand over mouth",
  "🤫": "shushing face",
  "🤔": "thinking face",
  "🤨": "face with raised eyebrow",
  "😐": "neutral face",

  "😶": "face without mouth",
  "😏": "smirking face",
  "😒": "unamused face",
  "🙄": "face with rolling eyes",
  "😬": "grimacing face",
  "🤥": "lying face",
  "😌": "relieved face",

  "😪": "sleepy face",
  "🤤": "drooling face",
  "😴": "sleeping face",
  "😷": "face with medical mask",
  "🤒": "face with thermometer",
  "🤕": "face with head-bandage",
  "🤢": "nauseated face",
  "🤮": "face vomiting",
  "🤧": "sneezing face",
  "🥵": " hot face",
  "🥶": " cold face",
  "🥴": " woozy face",
  "😵": "dizzy face",
  "🤯": "exploding head",
  "🤠": "cowboy hat face",
  "🥳": " partying face",
  "🥸": " disguised face",
  "😎": "smiling face with sunglasses",
  "🤓": "nerd face",
  "🧐": "face with monocle",
  "😕": "confused face",
  "😟": "worried face",
  "🙁": "slightly frowning face",
  "☹️": "frowning face",
  "☹": "frowning face",
  "😮": "face with open mouth",
  "😯": "hushed face",
  "😲": "astonished face",

  "🥺": " pleading face",
  "😦": "frowning face with open mouth",
  "😧": "anguished face",
  "😨": "fearful face",
  "😰": "anxious face with sweat",
  "😥": "sad but relieved face",
  "😢": "crying face",
  "😭": "loudly crying face",
  "😱": "face screaming in fear",
  "😖": "confounded face",
  "😣": "persevering face",
  "😞": "disappointed face",
  "😓": "downcast face with sweat",
  "😩": "weary face",
  "😫": "tired face",
  "🥱": " yawning face",
  "😤": "face with steam from nose",
  "😡": "pouting face",
  "😠": "angry face",
  "🤬": "face with symbols on mouth",
  "😈": "smiling face with horns",
  "👿": "angry face with horns",
  "💀": "skull",
  "☠️": "skull and crossbones",
  "☠": "skull and crossbones"
};
var emojisWeknow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <br />
      <br />
      <h1>Emoji Lovers</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter Emoji to get meaning"
      />

      <h2>{meaning}</h2>

      <hr />
      <br />
      <h1>Emoji's we know</h1>
      {emojisWeknow.map(function (emoji) {
        return (
          <div className="emoji-box">
            <div className="container">
              <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
                {" "}
                {emoji}{" "}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
