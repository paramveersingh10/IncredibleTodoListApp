import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}
export default App;
