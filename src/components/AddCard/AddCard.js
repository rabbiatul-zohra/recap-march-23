import React from "react";
import { AddIcon } from "./AddCard.styled";
import "../../styles/addCard.css";

const AddCard = ({ onClick, text }) => {
  return (
    <div role='button' className='card' onClick={onClick}>
      <AddIcon name='add' />
      <h3>{text}</h3>
    </div>
  );
};

export default AddCard;
