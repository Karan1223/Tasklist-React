import { useState } from 'react';
type AddTaskFormProps = {
  onAddTask: (title: string, tasks: string[]) => void;
};

const AddTasksForm = ({onAddTask}: AddTaskFormProps) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [tasks, setTask] = useState<string[]>([]);

  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAddTask(taskTitle, tasks);
      setTaskTitle('');
      setTask([]);
    };
  return (
    <div>
        <form className='add-form' onSubmit={handleSubmit}>
            
            <fieldset>
                <label>Add Title: </label>
                <input type="text"  value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter Title"/>
                &nbsp;
                <label>Add Tasks (comma-separated): </label>
                <input type="text" 
                value={tasks.join(',')} onChange={(e) => setTask(e.target.value.split(','))}
                placeholder='Enter Tasks' />

                <input type='submit' value='Add Tasks' />
            </fieldset>
        </form>
    </div>
  )}

export default AddTasksForm