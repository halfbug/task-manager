import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../App';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';

interface TaskListProps {
  tasks: Task[];
  onComplete: (task: Task) => void;
  onDelete: (task: Task) => void;
  onDragEnd: (result: any) => void;
}
const grid = 8;
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "transparent",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });
  
  const getListStyle = (isDraggingOver:any) => ({
    background: isDraggingOver ? "lightblue" : "transparent",
    padding: grid,
    // width: 250
  });
  
const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete, onDragEnd }) => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable"> 
          {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef} 
              style={getListStyle(snapshot.isDraggingOver)}
              >
                  
                {tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                      >
                        <TaskItem
                          task={task}
                          onComplete={onComplete}
                          onDelete={onDelete}
                          className={task.status === 'completed' ? 'task-item completed' : 'task-item'}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
           
              </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  };

export default TaskList;
