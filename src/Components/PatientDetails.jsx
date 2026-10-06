
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientDetails() {

  const [patients, setPatients] = useState([]);

  let navigate = useNavigate();


  async function getAllpatient(){
    try{
      let result = await axios.get('http://localhost:8080/getall')
     setPatients(result.data);
    }
    catch(error){
      console.log(error);
      
    }
  }

  let deletepatient = async (id)=>{
    if(confirm('you want to delete this reconrd' + id)){
      await axios.delete('http://localhost:8080/delete/' + id);
      getAllpatient();
    }
  }

  let onEdit = (id)=>{
    if(confirm('you want to update this record' + id)){
      navigate('/updateform/' + id);
    }
  }
  useEffect(()=>{
    getAllpatient();
  },[]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/patients")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPatients(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching patient data:", error);
  //     });
  // }, []);

  return (
    <div className="container-fluid mt-5">

      <h2 className="text-center mb-4 fw-bold text-primary">
        Patient Details
      </h2>

      <div className="table-responsive shadow">
        <table className="table table-bordered table-striped table-hover align-middle">

          <thead className="table-primary">
            <tr>
              <th>Patient Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Department</th>
              <th>Doctor</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Appointment Type</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {patients.map((patient) => (

              <tr key={patient.id}>

                <td>{patient.patientName}</td>

                <td>{patient.email}</td>

                <td>{patient.contact}</td>

                <td>{patient.age}</td>

                <td>{patient.gender}</td>

                <td>{patient.bloodGroup}</td>

                <td>{patient.department}</td>

                <td>{patient.doctorName}</td>

                <td>{patient.appointmentDate}</td>

                <td>{patient.appointmentTime}</td>

                <td>{patient.appointmentType}</td>
                
                <td ><button onClick={()=>deletepatient(patient.id)}>Delete  </button>
                <br />
              
                <button onClick={()=>onEdit(patient.id)}>Edit</button></td>
                  

              </tr>

            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default PatientDetails;

