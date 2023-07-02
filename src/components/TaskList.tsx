
type TaskListProps = {
    title: String;
    id: number;
    onDelete: (id: number) => void;
 

}
  
function TaskList({title,id,onDelete}: TaskListProps)
{
    return (
      <div className="tasks">
        <span className="tasks-title">
       <button className="remove-tasks" onClick={() => onDelete(id)}>X</button> <span><b>{title}</b></span>
       </span>
        
      </div>
    );
  };

  export default TaskList