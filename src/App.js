import "./App.css";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/TasksArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="content">
      <Header />
      <AddTasks />
      <Tasks />
       </div>
      </header>
    </div>
  );
}

export default App;
