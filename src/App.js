
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Components/Login/Login';
import './Styles/Login.css';
import './Styles/EmployeeDashboard.css';
import './Styles/AddEmployeeForm.css';
import EmployeeDashboard from './Components/Employees/EmployeeDashboard';
import AddEmployeeForm from './Components/Employees/AddEmployeeForm';
import SampleComponent from './Components/Employees/sampleComponent';
import { EmployeeProvider } from './Components/Employees/EmployeeContext';

function App() {
  return (
    <EmployeeProvider>
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/employees' element={<EmployeeDashboard/>}></Route>
      <Route path='/addemployee' element={<AddEmployeeForm/>}></Route>
      <Route path='/sample' element={<SampleComponent/>}></Route>
      </Routes>
      </Router>
      </EmployeeProvider>
  );
}

export default App;
