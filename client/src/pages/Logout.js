import React from "react";
import Navbar from "../components/Navbar/Navbar";

function LogoutPage () {
   return (
       <div>
           <Navbar />
           <div className="container mx-auto">
               <div className="flow-root bg-green-500 h-screen">
                <p className="mt-20 text-center text-white text-2xl">
                   You have successfully logged out!
               </p>
               <br></br>
               <p className="mt-40 text-center text-white text-2xl">
                   Click this link to return to login page!
               </p>
               </div>
           </div>
       </div>
   );
} 

export default LogoutPage;