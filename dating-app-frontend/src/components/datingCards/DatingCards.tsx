import React, { useState, useEffect } from "react";
import DatingCard from "react-tinder-card";
import "./DatingCards.css";
import axios from "../axios";

const DatingCards = () => {
  const [people, setPeople] = useState([
    {
      name: "",
      imgUrl: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/dating/cards");
        console.log("res", res);
        setPeople(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const swiped = (direction: string, nameToDelete: string) => {
    console.log("receiving " + nameToDelete);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!!");
  };

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <DatingCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;
