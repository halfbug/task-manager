import React, { useState } from 'react';
import { Task, TaskInput } from '../App';
import { useAuth } from '../auth.context';

interface TaskFormProps {
  addTask: (task: TaskInput) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { userGroup: loggedInUserGroup } = useAuth();
  const [userGroup, setUserGroup] = useState<string>(loggedInUserGroup);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addTask({ title, description, group: userGroup });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <select value={loggedInUserGroup} onChange={(e) => setUserGroup(e.target.value)} disabled>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="author">Author</option>
      </select>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
