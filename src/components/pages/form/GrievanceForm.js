import './GrievanceForm.css';
import Form from './Form';


function GrievanceForm() {
  return (
    <div className="GrievancePage">
      <div className="grievance-container">
        <header className="App-header">
      <div className='formTitle'> 
      PLM Student Assistance and Grievance Help Desk Form
      </div>
      
      <Form/>
      </header>
      </div>
    </div>
  );
}

export default GrievanceForm;
