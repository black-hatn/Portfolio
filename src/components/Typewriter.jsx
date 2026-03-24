import { useState, useEffect } from "react";

export default function Typewriter({ words, delay = 100 }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(delay);

  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(delay / 2);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(delay);
      }

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2500); // pause at end
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // pause before start next word
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words, delay]);

  return <span>{text}</span>;
}
