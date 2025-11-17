import React from "react";
// import "../../global.css";
import "./Breadcrumbs.css"
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
