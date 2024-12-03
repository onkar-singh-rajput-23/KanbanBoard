import React from "react";
import "./KanbanCard.css";

import urgentImg from "../images/urgent.svg";
import highImg from "../images/high.svg"; // Add this if high priority image exists
import mediumImg from "../images/mediam.svg";
import lowImg from "../images/low.svg";
import noPriorityImg from "../images/No-priority.svg";
import featureimg from "../images/feature.png";

import toDoImg from "../images/To-do.svg";
import inProgressImg from "../images/in-progress.svg";
import doneImg from "../images/Done.svg";
import cancelledImg from "../images/Cancelled.svg";
import backlogImg from "../images/Backlog.svg";

const KanbanCard = ({ data }) => {
  // Priority labels with corresponding image paths
  const priorityDetails = {
    4: { label: "Urgent", img: urgentImg },
    3: { label: "High", img: highImg },
    2: { label: "Medium", img: mediumImg },
    1: { label: "Low", img: lowImg },
    0: { label: "No priority", img: noPriorityImg },
  };
  const titledetail = {
    Todo: { label: "ToDo", img: toDoImg },
    "In progress": { label: "In Progress", img: inProgressImg },
    Done: { label: "Done", img: doneImg },
    Cancelled: { label: "Cancelled", img: cancelledImg },
    Backlog: { label: "Backlog", img: backlogImg },
  };

  const priority = priorityDetails[data.priority] || priorityDetails[0];

  const titleimage = titledetail[data.status] || {
    label: "No Status",
    img: doneImg,
  };
  return (
    <div className="kanban-card">
      <div className="card-header">
        <span className="card-id">{data.id}</span>
      </div>
      <div className="container">
        <span>
          <img
            src={titleimage.img}
            alt={`${titleimage.label} Icon`}
            className="title-image"
          />
        </span>
        <span>
          <h4 className="card-title">{data.title}</h4>
        </span>
      </div>
      <div className="card-footer">
        <div className="status-badge">
          <img
            src={priority.img}
            alt={`${priority.label} Icon`}
            className="priority-image"
          />
        </div>

        <div className="card-tag">
          <span>
            <img src={featureimg} alt="icon" className="feature-image" />
          </span>
          <span>{data.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
