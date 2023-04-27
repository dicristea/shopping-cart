import React, { useEffect, useState } from "react";
import "../styles/Card.css";

const Card = ({ name, onClick, gameOver, updateGameStatus }) => {
  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    if (!selected) {
      onClick();
      setSelected(true);
    }

    if (selected) {
      updateGameStatus();
    }
  };

  useEffect(() => {
    if (gameOver) {
      setSelected(false);
    }
  }, [gameOver]);

  return (
    <div className="card">
      <button onClick={() => onSelect()}>
        {selected}
        <img src={name} alt={`One Piece Wanted Poster for ${name}.`} />
      </button>
    </div>
  );
};

export default Card;
