

const TaskItem = ({ task, startEdit, deleteTask, toggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <strong>{task.name}</strong>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => startEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
