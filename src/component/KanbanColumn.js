import React from "react";
import KanbanCard from "./kanbanCard";
import "./KanbanColumn.css";
import add from "../images/add.svg";
import dots from "../images/dot.svg";

import urgentImg from "../images/urgent.svg";
import highImg from "../images/high.svg"; // Add this if high priority image exists
import mediumImg from "../images/mediam.svg";
import lowImg from "../images/low.svg";
import noPriorityImg from "../images/No-priority.svg";
import toDoImg from "../images/To-do.svg";
import inProgressImg from "../images/in-progress.svg";
import doneImg from "../images/Done.svg";
import cancelledImg from "../images/Cancelled.svg";
import backlogImg from "../images/Backlog.svg";

const priorityDetails = {
  4: "Urgent",
  3: "High",
  2: "mediam",
  1: "low",
  0: "No-Periority",
};

// Priority labels with corresponding image paths
const imageperioirydetails = {
  4: { label: "Urgent", img: urgentImg },
  3: { label: "High", img: highImg },
  2: { label: "Medium", img: mediumImg },
  1: { label: "Low", img: lowImg },
  0: { label: "No priority", img: noPriorityImg },
  Todo: { label: "ToDo", img: toDoImg },
  "In progress": { label: "In Progress", img: inProgressImg },
  Done: { label: "Done", img: doneImg },
  Cancelled: { label: "Cancelled", img: cancelledImg },
  Backlog: { label: "Backlog", img: backlogImg },
};

const KanbanColumn = ({ title, items }) => {
  const priority = imageperioirydetails[title] || imageperioirydetails[0]; // Fallback to "No priority"

  return (
    <div className="kanban-column">
      <div className="column-header">
        <div className="title-header">
          <img
            src={priority.img}
            alt={`${priority.label} Icon`}
            className="priority-image"
          />
          <h2>{!isNaN(title) ? priorityDetails[Number(title)] : title}</h2>
          <span className="task-count">{items.length}</span>
        </div>
        <div className="add-task-icons">
          <img src={add} alt="Add Task" className="task-icon" />
          <img src={dots} alt="More Options" className="task-icon" />
        </div>
      </div>

      {items.map((item) => (
        <div className="card-with-icons" key={item.id}>
          <KanbanCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default KanbanColumn;
