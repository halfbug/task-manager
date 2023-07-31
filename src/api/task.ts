
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Task } from '../App'; // Assuming you have defined Task interface in TaskList.tsx

// Sample tasks data for different user groups (mocked data)
const tasksData: { [group: string]: Task[] } = {
  admin: [
    {
      id: 1,
      title: 'Admin Task 1',
      description: 'Description for Admin Task 1',
      status: 'incomplete',
      group: 'admin',
    },
    // More tasks for the admin group...
  ],
  editor: [
    {
      id: 10,
      title: 'Editor Task 1',
      description: 'Description for Editor Task 1',
      status: 'incomplete',
      group: 'editor',
    },
    // More tasks for the editor group...
  ],
  author: [
    {
      id: 20,
      title: 'Author Task 1',
      description: 'Description for Author Task 1',
      status: 'incomplete',
      group: 'author',
    },
    // More tasks for the author group...
  ],
};

// Create a new Axios instance for the mock API
const mock = new MockAdapter(axios, { delayResponse: 500 });

// Mock API endpoint to fetch tasks for a specific user group
mock.onGet('/api/tasks').reply((config) => {
  const { group } = config.params;
  const tasks = tasksData[group] || [];
  return [200, tasks];
});

// Mock API endpoint to add a new task
mock.onPost('/api/tasks').reply((config) => {
  const taskData: Task= JSON.parse(config.data);
  const newTask: Task = { ...taskData, id: Date.now(), status: 'incomplete' };
  const groupTasks = tasksData[newTask.group];
  tasksData[newTask.group] = [...groupTasks, newTask];
  return [200, newTask];
});

// Mock API endpoint to update the status of a task
mock.onPatch('/api/tasks/:taskId').reply((config) => {
  const { taskId } = config.params;
  const { status } = JSON.parse(config.data);
  Object.keys(tasksData).forEach((group) => {
    const taskIndex = tasksData[group].findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      tasksData[group][taskIndex].status = status;
    }
  });
  return [200];
});

// Mock API endpoint to delete a task
mock.onDelete('/api/tasks/:taskId').reply((config) => {
  const { taskId } = config.params;
  Object.keys(tasksData).forEach((group) => {
    tasksData[group] = tasksData[group].filter((task) => task.id !== taskId);
  });
  return [200];
});


export const taskAPI = axios.create();