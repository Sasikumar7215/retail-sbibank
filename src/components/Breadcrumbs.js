import React from "react";
// import "../../global.css";
<<<<<<< HEAD
import "./Breadcrumbs.css"
=======

>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
export default function Breadcrumbs({ currentPage, currentItem }) {
  return (
    <div className="breadcrumbs">
      You are here:
      <span className="crumb">{currentPage}</span>
      <span>&gt;</span>
      <span className="crumb">{currentItem}</span>
    </div>
  );
}
