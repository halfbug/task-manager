import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'incomplete';
  group?: string;
}

export type TaskInput= Omit<Task,'id' | 'status'>

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  console.log("🚀 ~ file: App.tsx:17 ~ tasks:", tasks)
  const [userGroup, setUserGroup] = useState<string>('admin'); // For simplicity, we assume there's only one group.

  const addTask = (task: TaskInput)  => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'incomplete' }]);
  };

  const updateTaskStatus = (taskId: number, status: 'completed' | 'incomplete') => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(
    (task) => task.group === userGroup
  );

  return (
    <div className='main'>
      <h1>Task Management System</h1>
      <TaskForm addTask={addTask} />
      <h2>Tasks</h2>
      <select value={userGroup} onChange={(e) => setUserGroup(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="author">Author</option>
      </select>
      <TaskList
        tasks={filteredTasks}
        onComplete={(task) => updateTaskStatus(task.id, 'completed')}
        onDelete={(task) => deleteTask(task.id)}
      />
    </div>
  );
};

export default App;
