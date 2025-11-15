import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";
import TopMenu from "./TopMenu";
export default function Dashboard() {
  // auto-restore last visited module
  // const last = localStorage.getItem("lastPage") || "accounts";
  return (
    <>
   
     <div>
        <Header /> 
     </div>
     <div>
      <Menubar/>
     </div>
     <div>
        <TopMenu />
     </div>
   </>
  );
}