import { useState, useContext } from "react";
import Header from "./components/Header";
import Grocery from "./components/TaskList";
import Tasks from "./components/Tasks";
import AddTasksForm from "./components/AddTasksForm";
import { v4 } from "uuid";
import Search from "./components/Search"; 
import { ThemeContext } from "./context/ThemeContext";
import Switch from "react-switch";

const App = () => {  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  const [tasklist, setTask] = useState([
    {
        title: 'Humber',
        tasks: ['Task 1', 'Task 2', 'Task 3'],
        id: 1,
    },
    {
        title: 'MERN',
        tasks: ['Lab', 'Project', 'Quiz'],
        id: 2,
    },
    {
        title: 'Java',
        tasks: ['Group Discussion', 'Exam', 'Assignment'],
        id: 3,
    },
    ]);

    const totalTasks = tasklist.reduce((acc, current) => acc + current.tasks.length, 0);
console.log(totalTasks);

    function handleDelete(id: number)
    {
      setTask((prev) => prev.filter((g) => g.id !== id));
    };
  
    function addTasks(title: string, tasks: string[])
    {
        setTask((prevState) => [...prevState, {title: title, tasks: tasks, id: v4()},])
    }

    function searchTasks(title: string)
    {
        if(title)
        {
          setSearch(title)
        }
        else
        {
          setSearch('')
        }
    }

  return (
    <div className={`App ${theme}`}>
      <br/>
      <label>Dark Mode: </label>
      <Switch
      className="toggle-btn"
        onChange={toggleTheme}
        checked={theme === 'dark'}
        onColor="#1f2937"
        offColor="#d2d6dc"
        checkedIcon={false}
        uncheckedIcon={false}
      />
        <AddTasksForm onAddTask={addTasks}/>
        <Search onSearch={searchTasks}/>
      <Header title={'Task List'} totalTasks={totalTasks} />
    
      {tasklist.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()) ||
       t.tasks.some((task) =>
       task.toLowerCase().includes(search.toLowerCase())
      )).map((g) => (
        <>
        <Grocery title={g.title}  onDelete={handleDelete} id={g.id} key={g.id.toString()} />
       <Tasks tasks={g.tasks}/>
        </>
      ))}
   
    </div>
  );
};

export default App