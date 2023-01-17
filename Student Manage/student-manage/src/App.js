import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
            {/* START CONTROL */}
          <div className="card">
            <Control/>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudents/>
            {/* END LIST STUDENT */}
          </div>
        </div>
        <div className="col-5 grid-margin">
        {/* START FORM SINH VIEN */}
          <Form/>
        {/* END FORM SINH VIÊN */}
        </div>
      </div>
    </div>
  );
}

export default App;
