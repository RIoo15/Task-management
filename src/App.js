import './App.css';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import Header from './components/Header';
import Card from './components/Card';
import { useState } from 'react';




function App() {
  const [add, setAdd] = useState(false);
  const [Tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState('');
  const [singleDes, setSingleDes] = useState('');
  const [singleDueDate, setSingleDueDate] = useState('');

  // Use an array to store individual priorities for each task
  const [priorities, setPriorities] = useState([]);
  const [singlePriority, setSinglePriority] = useState(0);

  const UpdateTask = (id) => {
    setTasks(
      Tasks.map((t) => (t.id === id ? { ...t, complete: true } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(Tasks.filter((t) => (t.id === id ? false : true)));
  };

  const addToCard = () => {
    const id = Tasks.length === 0 ? 1 : Tasks.length + 1;
    const taskDetail = {
      id: id,
      task: singleTask,
      des: singleDes,
      complete: false,
      priority: singlePriority,
      dueDate: singleDueDate,
    };

    setTasks([...Tasks, taskDetail]);

    // Add the priority to the priorities array
    setPriorities([...priorities, singlePriority]);
    setSinglePriority(0);

    // Clear input fields
    ClearInput();
  };

  const ClearInput = () => {
    setSingleTask('');
    setSingleDes('');
    setSingleDueDate('');
  };

  const handleCustomTask = (event) => {
    setSingleTask(event.target.value);
  };

  const handleCustomDes = (event) => {
    setSingleDes(event.target.value);
  };

  const handleCustomDueDate = (event) => {
    setSingleDueDate(event.target.value);
  };

  const handleInput = () => {
    setAdd(!add);
  };

  const handlePriorityChange = (id, priority) => {
    setTasks(
      Tasks.map((t) => (t.id === id ? { ...t, priority } : t))
    );

    // Update the priority for the specific card in the priorities array
    setPriorities((prevPriorities) => {
      const newPriorities = [...prevPriorities];
      newPriorities[id - 1] = priority; // Adjust index since IDs start from 1
      return newPriorities;
    });

    setSinglePriority(priority);
  };

  return (
    <div className='main'>
      <div className='inputSection'>
        <Header handleInput={handleInput} />
        {add === true ? (
          <>
            <CustomInput
              value={singleTask}
              placeHolder='Enter Task'
              name='Task'
              change={handleCustomTask}
            />
            <CustomInput
              value={singleDes}
              placeHolder='Enter Description'
              name='Description'
              change={handleCustomDes}
            />
            <CustomInput
              type='date'
              value={singleDueDate}
              placeHolder='Enter Due Date'
              name='Due Date'
              change={handleCustomDueDate}
            />
            <div className='btnwrapper'>
              <CustomButton
                color='White'
                bg='#1877F2'
                name='Save Task'
                click={addToCard}
              />
              <CustomButton
                color='White'
                bg='red'
                name='Cancel'
                click={ClearInput}
              />
            </div>
          </>
        ) : null}
      </div>

      <div className='cardSection'>
        {Tasks.map((t) => (
          <Card
            title={t.task}
            des={t.des}
            key={t.id}
            id={t.id}
            delete={() => deleteTask(t.id)}
            update={() => UpdateTask(t.id)}
            complete={t.complete}
            priority={t.priority}
            updatePriority={handlePriorityChange}
            singlePriority={priorities[t.id - 1]}
            dueDate={t.dueDate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;