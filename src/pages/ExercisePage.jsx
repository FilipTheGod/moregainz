import SearchExercise from "../components/SearchExercise";
import React, { useState } from "react";
import Exercises from "../components/Exercises";


export default function Exercise() {
const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [search, setSearch] = useState("");


  return (
    <div>
<SearchExercise
        search={search}
        setSearch={setSearch}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
<Exercises
        search={search}
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />

    </div>
  )
}


