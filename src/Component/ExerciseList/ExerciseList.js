import React, { useEffect, useState } from "react";
import "./ExerciseList.css";
import HiredExercise from "../HiredExercise/HiredExercise";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";

const ExerciseList = () => {

  //stores a component's dynamic data
  const [exerciseList, setExerciseList] = useState([]);
  const [hiredExercise, setHiredExercise] = useState([]);

  //Get Data fro JSON File
  useEffect(() => {
    fetch("./exercises.json")
      .then((res) => res.json())
      .then((data) => setExerciseList(data));
  }, []);

  const AddToHiredExercise = (exerciseDetails) => {

    // Add HireExercise Number in  Total Exercises 
    const newHiredExercise = [...hiredExercise, exerciseDetails];
    setHiredExercise(newHiredExercise);
  };

  return (
<div>
<div className="row mt-4 m-3">
    <div className="col-md-9 ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
         
        {exerciseList.map((exerciseList) => (
          <ExerciseDetails
            key={exerciseList.key}
            exerciseList={exerciseList}
            AddToHiredExercise={AddToHiredExercise}
          ></ExerciseDetails>
        ))}
        </div>
    </div>
    <div className="col-md-3">
        <HiredExercise hiredExercise={hiredExercise}></HiredExercise>
    </div>
</div>
</div>
  );
};

export default ExerciseList;