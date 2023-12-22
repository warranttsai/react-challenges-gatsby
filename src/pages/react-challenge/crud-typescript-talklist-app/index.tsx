import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
// css
import "./style.scss";
import "react-circular-progressbar/dist/styles.css";
// layout
import Layout from "../../../components/layout";
import ReactChallengeLayout from "../../../components/reactChallengeLayout";
interface taskProps {
  id: number;
  task: string;
  priority: string;
  status: string;
}
export default function CrudTypescriptTalklistApp() {
  const [taskList, setTaskList] = useState<[taskProps]>([
    {
      id: 0,
      task: "1",
      priority: "1",
      status: "In Progress",
    },
  ]);
  const [showAddNewModal, setShowAddNewModal] = useState<boolean>(false);
  const handleStatusChange = (id, data) => {
    const listBuf = taskList.map((item: taskProps) =>
      item.id === id ? { ...item, status: data } : item
    );
    setTaskList(listBuf);
  };

  return (
    <Layout location={location}>
      <ReactChallengeLayout>
        <section id="crud-typescript-talklist-app-introduction">
          <h2>User Stories</h2>
          <article>
            There are different tasks you have to implement in this challenge.
            Follow these user stories step by step to avoid missing any
            functionality.
            <ol>
              <li>Add/Create a new task</li>
              <li>Delete a task</li>
              <li>Edit/Update a Task</li>
            </ol>
          </article>
        </section>
        <section
          style={{
            borderRadius: 20,
            padding: "30px 48px",
            background: "var(--bs-border-color)",
          }}
        >
          <div className="grid grid-cols-3">
            <h2>Task List</h2>
            <div />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowAddNewModal(true)}
            >
              + Add Task
            </button>
          </div>
          <div className="mt-3">
            {taskList.map((item: taskProps) => {
              return (
                <TaskItem
                  key={item.id}
                  id={item.id}
                  task={item.task}
                  priority={item.priority}
                  status={item.status}
                  handleStatusChange={handleStatusChange}
                />
              );
            })}
          </div>
        </section>
        {showAddNewModal && (
          <AddNewModal setShowAddNewModal={setShowAddNewModal} />
        )}
      </ReactChallengeLayout>
    </Layout>
  );
}

const TaskItem = ({
  id,
  task,
  priority,
  status,
  handleStatusChange,
}: {
  id: number;
  task: string;
  priority: string;
  status: string;
  handleStatusChange: (id: any, data: any) => void;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === "To Do") setProgress(0);
    else if (status === "In Progress") setProgress(50);
    else if (status === "Done") setProgress(100);
  }, [status]);

  return (
    <div
      className="grid grid-cols-5 text-center"
      style={{
        borderRadius: 20,
        background: "white",
        padding: "10px 20px",
        gap: 20,
      }}
    >
      <div className="grid grid-rows-2 justify-content-center align-items-center">
        <h5 style={{ color: "#7d7d7d" }}>Task</h5>
        <p>{task}</p>
      </div>
      <div className="grid grid-rows-2 justify-content-center align-items-center">
        <h5 style={{ color: "#7d7d7d" }}>Priority</h5>
        <p>{priority}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-light"
          onClick={() => {
            if (status === "To Do") handleStatusChange(id, "In Progress");
            else if (status === "In Progress") handleStatusChange(id, "Done");
            else if (status === "Done") handleStatusChange(id, "To Do");
          }}
        >
          {status}
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <CircularProgressbar value={progress} text={`${progress}%`} />
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ gap: 5 }}
      >
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

const AddNewModal = ({
  setShowAddNewModal,
}: {
  setShowAddNewModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [inputTask, setInputTask] = useState<string>("");
  const [selectPriority, setSelectPriority] = useState<string>("High");

  return (
    <div id="simple-modal" className="simple-modal">
      <div className="simple-modal-content">
        <div className="d-flex justify-content-between">
          <h2>Add Task</h2>
          <button className="btn btn-light">X</button>
        </div>
        <div className="grid grid-rows-4 align-items-center" style={{ gap: 5 }}>
          <span style={{ color: "#7d7d7d" }}>Task</span>
          <input
            id="task-input"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          <span style={{ color: "#7d7d7d" }}>Priority</span>
          <div
            className="d-flex justify-content-start align-items-center"
            style={{ gap: 10 }}
          >
            <button
              className={`btn ${
                selectPriority === "High" ? "btn-danger" : "border-danger"
              }`}
              style={{ width: 100 }}
              onClick={() => setSelectPriority("High")}
            >
              High
            </button>
            <button
              className={`btn ${
                selectPriority === "Medium" ? "btn-warning" : "border-warning"
              }`}
              style={{ width: 100 }}
              onClick={() => setSelectPriority("Medium")}
            >
              Mediunm
            </button>
            <button
              className={`btn ${
                selectPriority === "Low" ? "btn-success" : "border-success"
              }`}
              style={{ width: 100 }}
              onClick={() => setSelectPriority("Low")}
            >
              Low
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary" style={{ width: 100 }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};