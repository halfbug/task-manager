import React from 'react';
import { Task } from '../App';

interface TaskItemProps {
  task: Task;
  onComplete: (task: Task) => void;
  onDelete: (task: Task) => void;
  className?: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete, onDelete, className}) => {
  return (
    <div className={className}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.status === "incomplete" ? <button onClick={() => onComplete(task)}>Complete</button> : <span>{task.status}</span>}
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
};

export default TaskItem;
