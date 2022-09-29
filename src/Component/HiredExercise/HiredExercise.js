import React, { useEffect, useState } from "react";
import "./HiredExercise.css";

const HiredExercise = (props) => {
    const { hiredExercise } = props;
    let total = 0;
    for (const exercise of hiredExercise) {
        total = total + parseInt(exercise.time);
    }

    const [breakTime, setBreakTime] = useState(localStorage.getItem('breakTime') ? localStorage.getItem('breakTime') : 0);

useEffect(()=>{
    localStorage.setItem('breakTime', breakTime);
    setBreakTime(localStorage.getItem('breakTime'))

},[breakTime])

    return (
        <div className="container HiredExercise  border rounded shadow p-3 rounded">
            <section>
                <div className="container">
                    <div className="row bg-light text-dark p-2">

                        <diV className="col-md-4 ">
                            <div className="row">
                                <div className="col-md-12 mx-auto">65Kg</div>
                                <div className="col-md-12 mx-auto"><b>WEIGHT</b></div>
                            </div>
                        </diV>

                        <diV className="col-md-4 ">
                            <div className="row">
                                <div className="col-md-12 mx-auto">6.4</div>
                                <div className="col-md-12 mx-auto"><b>Height</b></div>
                            </div>
                        </diV>

                        <diV className="col-md-4 ">
                            <div className="row">
                                <div className="col-md-12 mx-auto">28Years</div>
                                <div className="col-md-12 mx-auto"><b>Age</b></div>
                            </div>
                        </diV>
                    </div>
                </div>
            </section>

            <h4><b>Add a Break</b></h4>

            <section>
                <div className="container">
                    <div className="row">
                        <diV className="col-md-2 ">
                            <button className="rounded-rectangle bg-primary text-white pl-2" onClick={() => { setBreakTime(10) }}>10S
                            </button>
                        </diV>
                        <diV className="col-md-2 ">
                            <button className="rounded-rectangle bg-primary text-white pl-2 " onClick={() => { setBreakTime(20) }}>20S
                            </button>
                        </diV>
                        <diV className="col-md-2 ">
                            <button className="rounded-rectangle  bg-primary text-white pl-2" onClick={() => { setBreakTime(30) }}>30S
                            </button></diV>
                        <diV className="col-md-2 ">
                            <button className="rounded-rectangle bg-primary text-white pl-2" onClick={() => { setBreakTime(40) }}>40S
                            </button>
                        </diV>
                        <diV className="col-md-2 ">
                            <button className="rounded-rectangle  bg-primary text-white pl-2" onClick={() => { setBreakTime(50) }}>50S
                            </button>
                        </diV>
                        <diV className="col-md-2 ">
                            <button className="rounded-rectangle  bg-primary text-white pl-2" onClick={() => { setBreakTime(60) }}>60S
                            </button></diV>

                    </div>
                </div>
            </section>
            <br />
            <div className="HiredExerciseList">
                <h4 className="text-danger">
                    <b> Exercise Details</b>
                </h4>
            </div>
            <section>
                <div className="container">
                    <div className="exercise row bg-dark text-white rounded p-2 m-3">
                        <diV className="col-md-6 "> Exercise Time :</diV>
                        <diV className="col-md-6 ">{total} Seconds</diV>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row bg-dark text-white rounded p-2 m-3">
                        <diV className="col-md-6 "> Break Time :</diV>
                        <diV className="col-md-6 ">{breakTime} Seconds</diV>
                    </div>
                </div>
            </section>

            <button className="btn btn-primary w-75 text-white mx-auto" id="liveToastBtn">Activity Complete
            </button>
            <button className="btn btn-primary w-75 text-white mx-auto mt-3 " >
                <a href="question.html" className="text-decoration-none text-white">Question Answer</a>
            </button>
        </div>
    );
};

export default HiredExercise;