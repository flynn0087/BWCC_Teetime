import React from "react";
import Navbar from "../components/Navbar/Navbar";

function Logout () {
   return (
       <div>
           <Navbar />
           <div className="container mx-auto bg-green-500">
               <p className="text-center text-white">
                   You have sucessfully logged out!
               </p>
           </div>
       </div>
   );
} 

export default Logout;