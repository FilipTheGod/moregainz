import React, { useState, useEffect } from "react";
// import Pagination from "@mui/material/Pagination";
// import { FetchData, ExerciseOptions } from "../utils/fetchData";
// import styled from "styled-components";
import useAuthStatus from "../hooks/useAuthStatus";
import { db } from '../firebase';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';



export default function SavedExercises() {
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

</>
  )
}

