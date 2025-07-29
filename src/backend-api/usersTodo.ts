import axios from "axios";

export const addNewTask = async (newTask: string) => {
  try {
    const response = axios.post(
      "http://localhost:8080/add-newTask",
      {
        newTask,
      },
      {
        params: { userId: "user123" },
      }
    );
    return response;
  } catch (err) {
    console.log("this is the error", err);
  }
};

export const deleteATask = async (task: string) => {
  try {
    await axios.delete(`http://localhost:8080/delete-task?userId=user123`, {
      data: { existingTask: task },
    });
  } catch (err) {
    console.log("this is the error", err);
  }
};

export const completeATask = async (task: string) => {
  try {
    await axios.post(`http://localhost:8080/complete-task?userId=user123`, {
      existingTask: task
    });
  } catch (err) {
    console.log("this is the error", err);
  }
};

export const undoATask = async (task: string) => {
  try {
    await axios.post(`http://localhost:8080/undo-task?userId=user123`, {
      existingTask: task
    });
  } catch (err) {
    console.log("this is the error", err);
  }
};

export const updateATask = async(newTask: string, existingTask: string) =>{
    try {
        await axios.put(`http://localhost:8080/update-task?userId=user123`, {
            newTask,
            existingTask
        });
    } catch (err) {
        console.log("this is the error", err);
    }
}