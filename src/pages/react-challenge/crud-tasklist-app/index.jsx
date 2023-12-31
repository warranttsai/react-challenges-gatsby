import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
// css
import "./style.scss";
import "react-circular-progressbar/dist/styles.css";
// layout
import Layout from "../../../components/layout";
import ReactChallengeLayout from "../../../components/reactChallengeLayout";
import axios from "axios";
import { requestListAPI } from "../../../lib/global";

const tableName = "taskList";
const getAllTasks = async () => {
  const payload = {
    endpoint: "getAllItems",
    params: {
      tableName: tableName,
    },
  };
  let data = [];
  await axios
    .post(`${requestListAPI}/dynamodbOperation`, payload)
    .then((res) => (data = res.data.Items))
    .catch((err) => {
      alert("Opps! Something wron. Please try again!");
      console.log(err);
    });

  return data;
};

export default function CrudTypescriptTalklistApp({ location }) {
  const [taskList, setTaskList] = useState([]);
  const [showAddNewModal, setShowAddNewModal] = useState(false);

  const handleStatusChange = (id, data) => {
    const listBuf = taskList.map((item) =>
      item.id === id ? { ...item, status: data } : item
    );
    setTaskList(listBuf);
  };

  useEffect(() => {
    getAllTasks().then((taskList) => setTaskList(taskList));
  }, []);

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
          <div className="mt-3 d-flex flex-column" style={{ gap: 10 }}>
            {taskList.map((item) => {
              return (
                <TaskItem
                  key={item.id}
                  id={item.id}
                  task={item.task}
                  priority={item.priority}
                  status={item.status}
                  handleStatusChange={handleStatusChange}
                  setTaskList={setTaskList}
                />
              );
            })}
          </div>
        </section>
        {showAddNewModal && (
          <AddNewModal
            setShowAddNewModal={setShowAddNewModal}
            setTaskList={setTaskList}
          />
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
  setTaskList,
}) => {
  const [progress, setProgress] = useState(0);
  const [showEditExistModal, setShowEditExistModal] = useState(false);

  useEffect(() => {
    if (status === "To Do") setProgress(0);
    else if (status === "In Progress") setProgress(50);
    else if (status === "Done") setProgress(100);
  }, [status]);

  return (
    <>
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
          <p style={{ overflowX: "auto" }}>{task}</p>
        </div>
        <div className="grid grid-rows-2 justify-content-center align-items-center">
          <h5 style={{ color: "#7d7d7d" }}>Priority</h5>
          <p>{priority}</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-light"
            onClick={async () => {
              let newStatus = "To Do";
              if (status === "To Do") newStatus = "In Progress";
              else if (status === "In Progress") newStatus = "Done";
              else if (status === "Done") newStatus = "To Do";

              const payload = {
                endpoint: "updateItem",
                params: {
                  tableName: tableName,
                  id: id,
                  task: task,
                  priority: priority,
                  status: newStatus,
                },
              };
              await axios
                .post(`${requestListAPI}/dynamodbOperation`, payload)
                .then(() => {
                  handleStatusChange(id, newStatus);
                  getAllTasks().then((taskList) => setTaskList(taskList));
                })
                .catch((err) => {
                  alert("Opps! Something wron. Please try again!");
                  console.log(err);
                });
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
          <button
            className="btn btn-secondary"
            onClick={() => setShowEditExistModal(true)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={async () => {
              const payload = {
                endpoint: "deleteItem",
                params: {
                  tableName: tableName,
                  id: id,
                  task: task,
                },
              };
              await axios
                .post(`${requestListAPI}/dynamodbOperation`, payload)
                .then(() =>
                  getAllTasks().then((taskList) => setTaskList(taskList))
                )
                .catch((err) => {
                  alert("Opps! Something wron. Please try again!");
                  console.log(err);
                });
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {showEditExistModal && (
        <EdiExistModal
          setShowEditExistModal={setShowEditExistModal}
          setTaskList={setTaskList}
          id={id}
          task={task}
          priority={priority}
        />
      )}
    </>
  );
};

/**
 * Modal for adding a new task
 * @param {Object} param0 - Destructured props
 * @param {Function} setShowAddNewModal - Function to control the visibility of the add new task modal
 * @param {Function} setTaskList - Function to set the task list
 * @returns {JSX.Element} - The modal for adding a new task
 */
const AddNewModal = ({ setShowAddNewModal, setTaskList }) => {
  const [inputTask, setInputTask] = useState("");
  const [selectPriority, setSelectPriority] = useState("High");

  return (
    <div id="add-new-modal-root" className="simple-modal">
      <div className="simple-modal-content">
        <div className="d-flex justify-content-between">
          <h2>Add Task</h2>
          <button
            className="btn btn-light"
            onClick={() => setShowAddNewModal(false)}
          >
            X
          </button>
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
          <button
            className="btn btn-primary"
            style={{ width: 100 }}
            onClick={async () => {
              const payload = {
                endpoint: "addNewItem",
                params: {
                  tableName: tableName,
                  task: inputTask,
                  priority: selectPriority,
                  status: "To Do",
                },
              };
              await axios
                .post(`${requestListAPI}/dynamodbOperation`, payload)
                .then(() => {
                  setShowAddNewModal(false);
                  getAllTasks().then((taskList) => setTaskList(taskList));
                })
                .catch((err) => {
                  alert("Opps! Something wron. Please try again!");
                  console.log(err);
                });
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Edit an existing task in a modal
 * @param {Function} setShowEditExistModal - Function to control the visibility of the edit modal
 * @param {Function} setTaskList - Function to set the task list
 * @param {string} id - The ID of the task
 * @param {string} task - The task content
 * @param {string} priority - The priority of the task
 * @ret
 */
const EdiExistModal = ({
  setShowEditExistModal,
  setTaskList,
  id,
  task,
  priority,
}) => {
  const [inputTask, setInputTask] = useState(task);
  const [selectPriority, setSelectPriority] = useState(priority);

  return (
    <div id="simple-modal" className="simple-modal">
      <div className="simple-modal-content">
        <div className="d-flex justify-content-between">
          <h2>Edit Task</h2>
          <button
            className="btn btn-light"
            onClick={() => setShowEditExistModal(false)}
          >
            X
          </button>
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
          <button
            className="btn btn-primary"
            style={{ width: 100 }}
            onClick={async () => {
              const payload = {
                endpoint: "updateItem",
                params: {
                  tableName: tableName,
                  id: id,
                  task: inputTask,
                  priority: selectPriority,
                  status: "To Do",
                },
              };
              await axios
                .post(`${requestListAPI}/dynamodbOperation`, payload)
                .then(() => {
                  setShowEditExistModal(false);
                  getAllTasks().then((taskList) => setTaskList(taskList));
                })
                .catch((err) => {
                  alert("Opps! Something wron. Please try again!");
                  console.log(err);
                });
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
