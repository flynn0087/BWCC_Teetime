import React from "react";
import { Link } from "react-router-dom";


function Course() {
    return (
        <div className="container bg-opacity-0 h-screen p-8">
            <div className="sm:float-left font-bold text-3xl underline">Manage your courses</div>
            <div className="sm:clear-left md:float-left p-4 border border-black bg-green-500 rounded-md ">
                <p className="text-2xl font-bold">Bushwood Country Club</p>
                <br></br>
                <p> 1234 Golf Lane W, Minneapolis, MN 55419</p>
                <p>p: (555) 555-5555 f: (555) 555-5556</p>
            </div>
            <div className="float-right">
                <Link className="text-white" to="/calendar">
                    <button
                        type="button"
                        className="rounded-md border bg-white hover:bg-purple-700 text-black font-bold border-black"
                    >
                        Go to Tee Time scheduler
                    </button>    
                </Link>
            </div>
        </div>
    );
}

export default Course;