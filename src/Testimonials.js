import React, { useState } from "react";
import list from "./data";
import {
  FaQuoteRight,
  FaChevronRight,
  FaChevronLeft,
  FaPeopleCarry,
} from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = list[index];

  const checkNumber = (number) => {
    if (number > list.length - 1) {
      return 0;
    }
    if (number < 0) {
      return list.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * list.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="testimonials">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <h4 className="info">{text}</h4>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          Random
        </button>
      </div>
    </article>
  );
};

export default Testimonials;
