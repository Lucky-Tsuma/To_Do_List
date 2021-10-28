import "./App.css";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import TasksArea from "./components/TasksArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="content">
      <Header />
      <AddTasks />
      <TasksArea />
       </div>
      </header>
    </div>
  );
}

export default App;
