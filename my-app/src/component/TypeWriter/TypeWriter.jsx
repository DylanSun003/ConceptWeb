import React, {useState, useEffect, useRef} from "react";
import "./TypeWriter.css";

const Phase = "100";
// {
//   typing: 1,
//   Pausing: 0,
//   Deleting: 0,
// };

const TYPING_INTERVAL = 30;
const PAUSE_TIME = 2000;
const DELETING_INTERVAL = 30;

const TypeWriter = ({texts}) => {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [phase, setPhase] = useState(Phase);

  const useTypedCurrentText = () => {
    useEffect(() => {
      switch (phase) {
        case "100": {
          const nextText = texts[currentTextIdx].slice(0, currentText.length + 1);
          if (nextText == currentText) {
            setPhase("010");
            return;
          }
          const timeout = setTimeout(() => {
            setCurrentText(nextText);
          }, TYPING_INTERVAL);
          return () => clearTimeout(timeout);
        }
        case "001": {
          if (!currentText) {
            const nextIdx = currentTextIdx + 1;
            setCurrentTextIdx(texts[nextIdx] ? nextIdx : 0);
            setPhase("100");
            return;
          }
          const nextRemaining = texts[currentTextIdx].slice(0, currentText.length - 1);
          const timeout = setTimeout(() => {
            setCurrentText(nextRemaining);
          }, DELETING_INTERVAL);
          return () => clearTimeout(timeout);
        }
        case "010":
        default:
          const timeout = setTimeout(() => {
            setPhase("001");
          }, PAUSE_TIME);
          return () => clearTimeout(timeout);
      }
    }, [texts, currentText, phase]);
    return currentText;
  };

  return (
    <h2>
      {useTypedCurrentText()} <span className="mark"></span>
    </h2>
  );
};

export default TypeWriter;
