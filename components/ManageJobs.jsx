import "../cssFiles/ManageJobs.css";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialColumns = {
  applied: {
    name: "Applied",
    items: [],
    id: 1,
  },
  interviewing: {
    name: "Interviewing",
    items: [],
    id: 2,
  },
  offered: {
    name: "Offered",
    items: [],
    id: 3,
  },
  rejected: {
    name: "Rejected",
    items: [],
    id: 4,
  },
};

export default function ManageJobs() {
  const [columns, setColumns] = useState(initialColumns);
  const [form, setForm] = useState({
    companyName: "",
    jobTitle: "",
    salary: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { id: Date.now(), ...form };

    if (isEditing) {
      const columnCopy = { ...columns };
      for (let key in columnCopy) {
        const index = columnCopy[key].items.findIndex(
          (item) => item.id === editingJobId
        );
        if (index !== -1) {
          columnCopy[key].items[index] = newJob;
        }
      }
      setColumns(columnCopy);
      setIsEditing(false);
      setEditingJobId(null);
    } else {
      setColumns((prev) => ({
        ...prev,
        applied: {
          ...prev.applied,
          items: [...prev.applied.items, newJob],
        },
      }));
    }

    setForm({ companyName: "", jobTitle: "", salary: "" });
  };

  const handleDelete = (columnId, jobId) => {
    const columnCopy = { ...columns };
    columnCopy[columnId].items = columnCopy[columnId].items.filter(
      (item) => item.id !== jobId
    );
    setColumns(columnCopy);
  };

  const handleEdit = (columnId, job) => {
    setForm({
      companyName: job.companyName,
      jobTitle: job.jobTitle,
      salary: job.salary,
    });
    setIsEditing(true);
    setEditingJobId(job.id);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const handleMoveRight = (columnId, job) => {
    const columnOrder = ["applied", "interviewing", "offered", "rejected"];
    const currentIndex = columnOrder.indexOf(columnId);

    if (currentIndex < columnOrder.length - 1) {
      const nextColumnId = columnOrder[currentIndex + 1];
      const columnCopy = { ...columns };

      columnCopy[columnId].items = columnCopy[columnId].items.filter(
        (item) => item.id !== job.id
      );

      columnCopy[nextColumnId].items = [...columnCopy[nextColumnId].items, job];

      setColumns(columnCopy);
    }
  };

  return (
    <div className="row jobs-section" id="managejobs">
      <h2 className="center-txt">Manage Jobs</h2>

      <form onSubmit={handleSubmit} className="job-form">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={form.jobTitle}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? "Update Job" : "Add Job"}</button>
      </form>

      <div className="kanban-board">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(columns).map(([columnId, column]) => (
            <div key={columnId} className="kanban-column">
              <h3>{column.name}</h3>
              <Droppable droppableId={columnId}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`kanban-column-content ${
                      snapshot.isDraggingOver ? "dragging-over" : ""
                    }`}
                  >
                    {column.items.map((job, index) => (
                      <Draggable
                        key={job.id}
                        draggableId={String(job.id)}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`kanban-item ${
                              snapshot.isDragging ? "dragging" : ""
                            }`}
                          >
                            <p>
                              <strong>{job.jobTitle}</strong> @{" "}
                              {job.companyName}
                            </p>
                            <p>Salary: £{job.salary}</p>
                            <div className="kanban-item-actions">
                              <button onClick={() => handleEdit(columnId, job)}>
                                <img
                                  className="delete-icon"
                                  src="https://cdn-icons-png.flaticon.com/128/1250/1250615.png"
                                />
                              </button>
                              <button
                                onClick={() => handleDelete(columnId, job.id)}
                              >
                                <img
                                  className="delete-icon"
                                  src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
                                />
                              </button>
                              <button
                                className="drag-btn"
                                onClick={() => handleMoveRight(columnId, job)}
                              >
                                <img
                                  className="delete-icon"
                                  src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png"
                                />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}
