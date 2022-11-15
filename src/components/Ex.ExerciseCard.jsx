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
  if (length > 20) {
    str = exercise.name.slice(0, 20);
    str = str.concat(`..`);
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
          // bodyPart: exercise.bodyPart,
          // target: exercise.target,
        }),
      });
      console.log('saved exercise', savedExercise)

    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <Link
      style={{ textDecoration: "none" }}
      className="exercise_card"
      to={`/exercise/${exercise.id}`}
    >
      <ExerciseCardDiv>
        <div className="image">
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </div>
        <div className="content">
          <span className="btn">{exercise.bodyPart}</span>
          <span className="btn btn2">{exercise.target}</span>
          <button className=" top-[10%] right-[7%] z-12 bg-white cursor-pointer border-2 border-black rounded-full w-12 h-12 flex justify-center items-center"
          onClick={saveExercise}>
          {isFavorite ? <FaHeart className="text-lg text-black "/> : <FaRegHeart className="text-lg text-black "/>}
          </button>
        </div>
        <h3>{str}</h3>
      </ExerciseCardDiv>
    </Link>
  );
};

const ExerciseCardDiv = styled.div`
  margin: 2rem;
  padding: 1rem;
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
      rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
  }
  .image {
    width: 70%;
    margin: auto auto;
    img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    .btn {
      padding: 0.5rem 1rem;
      border: none;
      word-break: break-word;
      background-color:#f22f59;
      text-transform: capitalize;
      border-radius: 7px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      color: #fff;
      font-size: 90%;
      font-weight: 500;
      &:hover {
        color: #f22f59;
        background-color: #fafafa;
      }
    }
    .btn2 {
      padding: 0.5rem 0.8rem;
      text-align: center;
      color: #f22f59;
      background-color: #fafafa;
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
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    word-break: break-word;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    width: 60vw;
    height: 400px;
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    width: 80vw;
    height: 400px;
  }
`;
export default ExerciseCard;