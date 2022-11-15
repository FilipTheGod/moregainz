import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from "react";
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import useAuthStatus from "../hooks/useAuthStatus";
const ExerciseCard = ({ exercise, index }) => {
  let str;
  const [isFavorite, setIsFavorite] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useAuthStatus();
  const length = exercise.name.length;
  if (length > 29) {
    str = exercise.name.slice(0, 29);
    str = str.concat(`...`);
  } else {
    str = exercise.name;
  }
  const exerciseID = doc(db, 'users', `${user?.uid}`);
  const saveExercise = async () => {
    console.log('user at exercise card  @ save exercise : ',user)
    if (user?.email) {
      setIsFavorite(!isFavorite);
      setSaved(!saved);
      const savedExercise = await updateDoc(exerciseID, {
        savedExercises: arrayUnion({
          id: exercise.id,
          name: exercise.name,
          gifUrl: exercise.gifUrl,
          bodyPart: exercise.bodyPart,
          target: exercise.target,
        }),
      });
      console.log('saved exercise', savedExercise)

    } else {
      alert('Please log in to save a movie');
    }
  };
  return (


      <ExerciseCardDiv>
    <Link
      style={{ textDecoration: "none" }}
      className="exercise_card"
      to={`/exercise/${exercise.id}`}
    >
        <div className="image">
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </div>
        <h3>{str}</h3>
    </Link>
        <div className="content">
          <span className="btn">{exercise.bodyPart}</span>
          <span className="btn btn2">{exercise.target}</span>
          <button className=" top-[10%] right-[7%] z-12 bg-white cursor-pointer border-2 border-black rounded-full w-12 h-12 flex justify-center items-center"
          onClick={saveExercise}>
          {isFavorite ? <FaHeart className="text-lg text-black "/> : <FaRegHeart className="text-lg text-black "/>}
          </button>
        </div>
      </ExerciseCardDiv>


  );
};

const ExerciseCardDiv = styled.div`
  padding: 2rem 1rem;
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
      rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
  }
  .image {
    width: 80%;
    margin: auto auto;
    img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1rem;
    .btn {
      padding: 1rem 2rem;
      border: none;
      background-color: #f22f59;
      text-transform: capitalize;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      color: #fff;
      font-size: 100%;
      font-weight: 500;
      &:hover {
        color:#f22f59;
        background-color: #fafafa;
      }
    }
    .btn2 {
      color: #f22f59;
      background-color: #fafafa;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      &:hover {
        background-color: #f22f59;
        color: #fff;
      }
    }
  }
  h3 {
    font-size: 1.3rem;
    text-align: center;
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 2rem;
    width: 40vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 9px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    box-sizing: border-box;
    &:hover {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
        rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
    }
    .image {
      width: 90%;
      margin: auto auto;
      img {
        width: 100%;
      }
    }
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.7rem 1rem;
        border-radius: 9px;
      }
    }
    h3 {
      word-break: word-break;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 520px) {
    width: 100%;
    height: max-content;
    align-self: center;
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.5rem 1rem;
        border-radius: 9px;
      }
    }
  }
`;




export default ExerciseCard;