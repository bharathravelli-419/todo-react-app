import { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InputBox from './components/InputBox/InputBox';
import OpenTasks from './components/OpeneTasks/OpenTasks';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';

const App: React.FC = () => {

  const [openTasks, setOpenTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const onAddTask = useCallback((task: string)=>{
    setOpenTasks((prevState: string[])=>{
      if(prevState.indexOf(task) === -1)
        return [task,...prevState];
      return [...prevState];
    });
  },[]);

  const onModifyingTask= (prevValue:string, newValue: string)=>{
    const index = openTasks.indexOf(prevValue);
    if(index !== -1 && (prevValue !== newValue)){
      const copiedOpenTasksArray: string[] = [...openTasks];
      copiedOpenTasksArray[index] = newValue;
      setOpenTasks(copiedOpenTasksArray);
      console.log('Edited the Task', newValue);
    }
  }
  const deleteTask = (task:string)=>{
    setOpenTasks((prevState)=> ([...prevState.filter(t=> t!== task)]));
  }
  const onTaskComplete= (task: sring)=>{
    setOpenTasks((prevState)=>([...prevState.filter(t=> t!== task)]))
    setCompletedTasks((prevState)=>{
      return(
        [...prevState, task]
      );
    });
  };
  const onUndo=( task: string)=>{
    setOpenTasks((prevState)=>{
      return prevState.indexOf(task) == -1 ? [task, ...prevState] : [...prevState];
    });
    setCompletedTasks((prevState)=> ([...prevState.filter(t=> t!== task)]));
  }
  console.log(openTasks);
  return (
    <div className="to-do-main-box">
      <Header />
      <InputBox addNewTask={onAddTask}  />
      <OpenTasks openTasks={openTasks} onTaskComplete={onTaskComplete} modifyAfterEdit={onModifyingTask} onDeleteTask={deleteTask} />
      <CompletedTasks completedTasks={completedTasks} onUndo={onUndo} />
    </div>
  )
};

export default App;