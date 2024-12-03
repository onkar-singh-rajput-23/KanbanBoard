"use client";
import React, { useState, useEffect, useRef } from "react";
import "./styles/style.css";
import KanbanColumn from "./component/KanbanColumn";
import { fetchData } from "./utils/api";
import Display from "./images/Display.svg";
import Down from "./images/down.svg";

const App = () => {
  const [data, setData] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");
  const [showControls, setShowControls] = useState(false); // Toggle visibility of the floating card

  const controlsRef = useRef(null); // Ref for the floating card

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setShowControls(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGroupingChange = (e) => setGrouping(e.target.value);

  const handleSortingChange = (e) => setSorting(e.target.value);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  const groupData = () => {
    return data.reduce((acc, ticket) => {
      const groupKey =
        grouping === "status"
          ? ticket.status
          : grouping === "user"
          ? ticket.userId
          : ticket.priority;

      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(ticket);
      return acc;
    }, {});
  };

  const sortedData = (tickets) => {
    return [...tickets].sort((a, b) => {
      if (sorting === "priority") {
        return b.priority - a.priority;
      }
      if (sorting === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const groupedData = groupData();

  return (
    <div>
      <div className="header">
        <button className="display-button" onClick={toggleControls}>
          <img src={Display} alt="Display" />
          Display
          <img src={Down} alt="Down" />
        </button>
        {showControls && (
          <div className="floating-card" ref={controlsRef}>
            <div className="dropdown-container">
              <label>
                Group by:
                <select onChange={handleGroupingChange} value={grouping}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </label>
            </div>
            <div className="dropdown-container">
              <label>
                Sort by:
                <select onChange={handleSortingChange} value={sorting}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="kanban-board">
        {Object.keys(groupedData).map((groupKey) => (
          <KanbanColumn
            key={groupKey}
            title={groupKey}
            items={sortedData(groupedData[groupKey])}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
