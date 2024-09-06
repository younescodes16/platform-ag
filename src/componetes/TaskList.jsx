
import { useState } from 'react';
import TaskItem from '../componetes/TaskItem';
import TaskForm from './TaskForm';

const TaskList = ({ tasks, updateTask, deleteTask, toggleComplete }) => {
  const [editTask, setEditTask] = useState(null);

  const startEdit = (task) => {
    setEditTask(task);
  };

  const cancelEdit = () => {
    setEditTask(null);
  };

  return (
    <div className="task-list">
      {editTask ? (
        <TaskForm
          taskToEdit={editTask}
          updateTask={updateTask}
          cancelEdit={cancelEdit}
        />
      ) : null}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          startEdit={startEdit}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
