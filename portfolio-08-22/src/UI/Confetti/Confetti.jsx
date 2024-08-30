import React, { useEffect } from "react";
import "./Confetti.scss";

const Confetti = ({ text }) => {
  useEffect(() => {
    const confetti = document.querySelectorAll(".confetti");
    confetti.forEach((conf) => {
      conf.style.animationDelay = `${Math.random() * 2}s`;
    });
  }, []);

  return (
    <div className="confetti-text-container">
      <h1>{text}</h1>
      <div className="confetti-wrapper">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="confetti"></div>
        ))}
      </div>
    </div>
  );
};

export default Confetti;
