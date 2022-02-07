import React from "react";
import "../styles/skillCard.css";
function SkillCard({ icon, name, progress }) {
  return (
    <div className="skillCard border border-2 border-danger fw-bolder fs-5 d-flex justify-content-between flex-wrap align-items-center p-2 bg-black my-2">
      <div className="d-flex align-items-center px-3">
        <div className="text-danger fw-bolder fs-1 pe-2">{icon}</div>
        <div className="text-white">{name}</div>
      </div>

      <div className="progress bg-black border border-2 border-white ">
        <div
          style={{ width: `${progress}%` }}
          className="progress-bar bg-danger "
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress + "%"}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
