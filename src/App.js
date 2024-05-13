import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import StudentsView from './components/student/StudentsView';

function App() {
  return (
    <div className="App">
     <h2>Welcome to our front end</h2>
     <StudentsView />
    </div>
  );
}

export default App;
