import { useState } from "react";

function App() {

  const [student,setStudent] = useState({
    name: "Zuhair",
    grade: 7,
    subject: "Maths",
    marks: 97
  })
    function updateStudent() {
    setStudent({
      name: "Raiyan",
      grade:6,
      subject: "English",
      marks:90
    });
  }


  function updateName(event) {
    setStudent({
      name: event.target.value,
      grade:6,
      subject: "English",
      marks:90
    });
  }

  return (
    <div>
      <h2>Student's details</h2>
      <p>Name: {student.name}</p>
      <p>Grade: {student.grade}</p>
      <p>Subject: {student.subject}</p>
      <p>Marks: {student.marks}</p>

      <div>
        <button onClick={updateStudent}>Change information</button>
      </div>
      <div>
        <p>
          <input placeholder="Enter the name" onChange={updateName}/>
        </p>
      </div>

    </div>
    
  );
}

export default App;
