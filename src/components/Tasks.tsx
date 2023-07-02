
type TasksProps = {
    tasks: string[];
}

const Tasks = ({tasks}: TasksProps) =>{
  return (
    <div className="counter">
        <ul className="counter-items">
        {tasks.map((i: string) => (
            <li key={i}>{i}</li>
        ))}
              
        </ul>
        </div>
  )}

export default Tasks