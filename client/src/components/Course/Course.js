import React from "react";
import { Link } from "react-router-dom";


function Course() {
    return (
        <div className="container bg-green-500 h-screen p-8 flow-root">
            <div className="float-left">
                <p className="text-2xl font-bold">Bushwood Country Club</p>
                <br></br>
                <p> 1234 Golf Lane W, Minneapolis, MN 55419</p>
                <p>p: (555) 555-5555 f: (555) 555-5556</p>
            </div>
            <div className="float-right">
                <Link className="text-white" to="/calendar">
                    <button
                        type="button"
                        className="rounded-md border border-black"
                    >
                        Go to Tee Time scheduler
                    </button>    
                </Link>
            </div>
        </div>
    );
}

export default Course;