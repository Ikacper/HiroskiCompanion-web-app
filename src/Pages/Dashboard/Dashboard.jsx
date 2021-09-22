import React, { useState, useEffect } from 'react';

export default function ConsolePage() {
  const [date, setDate] = useState([0, 0, 0]);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/gs', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDate([data.day, data.week, data.month]);
        data.heroes.forEach((hero) => {
          if (hero.owner === 1) {
            setHeroes(heroes.push(hero));
          }
        });
      });
  }, []);

  return (
    <div>
      {date}
      <img src={`Hero_${heroes.name}.png`} alt="hero" />
    </div>
  );
}
