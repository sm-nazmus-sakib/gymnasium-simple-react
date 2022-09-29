import React from "react";

import "./ExerciseDetails.css";

const Exercise = (props) => {
    //Get data by props
    const { img, age, description, time, name } = props.exerciseList;
    // Get Name, Age, Country, Role, Salary, img ,Expert by destructuring
    return (
        <div className="container">
            <div className="row">
                <div className="Exercise-info col me-3 mt-3 p-3 ms-3 border rounded shadow p-3 rounded">
                    <div>
                        <img src={img} alt="" width="100%" height="250" />
                    </div>
                    <div>
                        <h4 className=" text-danger text-uppercase  ">
                            <b>{name}</b>
                        </h4>
                        <p>

                            {description}          
                            </p>


                        <p>
                            <b>Age :</b> {age}
                        </p>
                        <p>
                            <b>Time Required:</b> {time}s
                        </p>

                        <button
                            onClick={() => props.AddToHiredExercise(props.exerciseList)}
                            className="btn btn-warning btn-outline-dark"
                        >

                            Add to List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;