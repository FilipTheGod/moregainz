import React, { useState, useEffect } from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import { db } from '../firebase';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';

export default function SavedExercises({ exercises, bodyPart, setExercises }) {
  let str;
const { user } = useAuthStatus();
const [savedExercises, setSavedExercises] = useState([]);

useEffect(() => {
  onSnapshot(doc(db, 'users', `${user?.uid}`), (doc) => {
    setSavedExercises(doc.data().savedExercises);
  });
}, [user?.uid]);

//delete saved exercise from database

const exerciseRef = doc(db, 'users', `${user?.uid}`);
const deleteExercise = async (id) => {
  try{
    const result = savedExercises.filter((exercise) => exercise.id !== id);
    await updateDoc(exerciseRef, {
      savedExercises: result,
    });
    console.log('saved exercise', result)
  } catch (error) {
    console.log(error)
  }
};

  return (

<>
  <div className="card">
        {savedExercises.map((exercise, index) => (
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
       <p onClick={()=> deleteExercise(exercise.id)} className="top-[10%] right-[7%] z-12 bg-white cursor-pointer border-2 border-black rounded-full w-12 h-12 flex justify-center items-center"><AiOutlineClose /></p>
     </div>
        </ExerciseCardDiv>
        ))}
  </div>
</>
  )
}

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

