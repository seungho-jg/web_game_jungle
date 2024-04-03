import { useState } from 'react';

const Button = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const handleClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="flex justify-center py-5">
      <button
        id="button"
        className="border-pink-600 border px-3 py-1 rounded-md cursor-pointer hover:bg-pink-600 hover:text-white"
        onClick={handleClick}
      >
        click
      </button>
      {randomNumber && <p>랜덤한 숫자: {randomNumber}</p>}
    </div>
  );
};

export default Button;
