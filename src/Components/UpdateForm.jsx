import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const validationRules = {
    name: {
        required: {
            value: true,
            message: "Patient name required"
        }
    },

    email: {
        required: {
            value: true,
            message: "Email required"
        }
    },

    contact: {
        required: {
            value: true,
            message: "Contact required"
        }
    },

    age: {
        required: {
            value: true,
            message: "Age required"
        }
    },

    gender: {
        required: {
            value: true,
            message: "Select gender"
        }
    },

    bloodGroup: {
        required: {
            value: true,
            message: "Select blood group"
        }
    },

    department: {
        required: {
            value: true,
            message: "Select department"
        }
    },

    doctorName: {
        required: {
            value: true,
            message: "Doctor name required"
        }
    },

    symptoms: {
        required: {
            value: true,
            message: "Symptoms required"
        }
    },

    emergencyContact: {
        required: {
            value: true,
            message: "Emergency contact required"
        }
    },

    appointmentDate: {
        required: {
            value: true,
            message: "Appointment date required"
        }
    },

    appointmentTime: {
        required: {
            value: true,
            message: "Appointment time required"
        }
    },

    appointmentType: {
        required: {
            value: true,
            message: "Select appointment type"
        }
    },

    address: {
        required: {
            value: true,
            message: "Address required"
        }
    },

    city: {
        required: {
            value: true,
            message: "City required"
        }
    },

    state: {
        required: {
            value: true,
            message: "State required"
        }
    },

    pincode: {
        required: {
            value: true,
            message: "Pincode required"
        }
    },

    insurance: {
        required: {
            value: true,
            message: "Select insurance option"
        }
    }
};

function UpdateForm() {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();

     let navigate =useNavigate();

     let {id} = useParams();

     let getSingledata = async()=>{
        let result = await axios.get('http://localhost:8080/get/' + id);
        console.log(result.data);
        for(let props in result.data){
            setValue(props, result.data[props])
        }

        
     }
     useEffect(()=>{
        getSingledata();
     },[]);

    let onUpdate = async(data) =>{
        alert(" updateHospital form successfully submitted");
         try{
         await axios.put('http://localhost:8080/update/' +data.id,data);
         navigate('/patientdetails');

         }catch(error){
            console.log(error);
            
         }
    };
    const inputClass = (field) =>
        `form-control ${errors[field] ? 'is-invalid' : ''}`;

    const selectClass = (field) =>
        `form-select ${errors[field] ? 'is-invalid' : ''}`;

    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container">

                {/* Main Card */}
                <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                    {/* Header */}
                    <div className="bg-primary text-white p-4">
                        <div className="text-center">
                            <h1 className="fw-bold mb-2">Hospital Registration Form</h1>
                            <p className="mb-0">
                                Please fill in the details carefully
                            </p>
                        </div>
                    </div>

                    <div className="card-body p-4 p-md-5">
                        <form onSubmit={handleSubmit(onUpdate)}>

                            {/* Patient Details */}
                            <fieldset className="border rounded-3 p-3 p-md-4 mb-4">
                                <legend className="float-none w-auto px-3 text-primary fw-bold">
                                    Patient Details
                                </legend>

                                <div className="row g-4">

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Patient Name
                                        </label>
                                        <input
                                            type="text"
                                            className={inputClass("patientName")}
                                            placeholder="Enter patient name"
                                            {...register("patientName", validationRules.name)}
                                        />
                                        {errors.patientName && (
                                            <div className="invalid-feedback">
                                                {errors.patientName.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className={inputClass("email")}
                                            placeholder="Enter email"
                                            {...register("email", validationRules.email)}
                                        />
                                        {errors.email && (
                                            <div className="invalid-feedback">
                                                {errors.email.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Contact
                                        </label>
                                        <input
                                            type="text"
                                            className={inputClass("contact")}
                                            placeholder="Enter contact number"
                                            {...register("contact", validationRules.contact)}
                                        />
                                        {errors.contact && (
                                            <div className="invalid-feedback">
                                                {errors.contact.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Age
                                        </label>
                                        <input
                                            type="number"
                                            className={inputClass("age")}
                                            placeholder="Enter age"
                                            {...register("age", validationRules.age)}
                                        />
                                        {errors.age && (
                                            <div className="invalid-feedback">
                                                {errors.age.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold d-block">
                                            Gender
                                        </label>

                                        <div className="d-flex flex-wrap gap-4 pt-2">
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="Male"
                                                    {...register("gender", validationRules.gender)}
                                                />
                                                <label className="form-check-label">Male</label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="Female"
                                                    {...register("gender")}
                                                />
                                                <label className="form-check-label">Female</label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="Other"
                                                    {...register("gender")}
                                                />
                                                <label className="form-check-label">Other</label>
                                            </div>
                                        </div>

                                        {errors.gender && (
                                            <div className="text-danger small mt-2">
                                                {errors.gender.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Blood Group
                                        </label>
                                        <select
                                            className={selectClass("bloodGroup")}
                                            {...register("bloodGroup", validationRules.bloodGroup)}
                                        >
                                            <option value="">Select Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                        {errors.bloodGroup && (
                                            <div className="invalid-feedback">
                                                {errors.bloodGroup.message}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </fieldset>

                            {/* Medical Details */}
                            <fieldset className="border rounded-3 p-3 p-md-4 mb-4">
                                <legend className="float-none w-auto px-3 text-primary fw-bold">
                                    Medical Details
                                </legend>

                                <div className="row g-4">

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Department
                                        </label>
                                        <select
                                            className={selectClass("department")}
                                            {...register("department", validationRules.department)}
                                        >
                                            <option value="">Select Department</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Orthopedic">Orthopedic</option>
                                            <option value="Dermatology">Dermatology</option>
                                            <option value="General">General</option>
                                            <option value="Pediatrics">Pediatrics</option>
                                            <option value="ENT">ENT</option>
                                        </select>
                                        {errors.department && (
                                            <div className="invalid-feedback">
                                                {errors.department.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Doctor Name
                                        </label>
                                        <input
                                            type="text"
                                            className={inputClass("doctorName")}
                                            placeholder="Enter doctor name"
                                            {...register("doctorName", validationRules.doctorName)}
                                        />
                                        {errors.doctorName && (
                                            <div className="invalid-feedback">
                                                {errors.doctorName.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold">
                                            Symptoms
                                        </label>
                                        <textarea
                                            className={`form-control ${errors.symptoms ? 'is-invalid' : ''}`}
                                            rows="3"
                                            placeholder="Describe symptoms"
                                            {...register("symptoms", validationRules.symptoms)}
                                        />
                                        {errors.symptoms && (
                                            <div className="invalid-feedback">
                                                {errors.symptoms.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Previous Disease
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Enter previous disease details"
                                            {...register("previousDisease")}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Current Medication
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Enter current medication"
                                            {...register("medication")}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Emergency Contact
                                        </label>
                                        <input
                                            type="text"
                                            className={inputClass("emergencyContact")}
                                            placeholder="Enter emergency contact"
                                            {...register("emergencyContact", validationRules.emergencyContact)}
                                        />
                                        {errors.emergencyContact && (
                                            <div className="invalid-feedback">
                                                {errors.emergencyContact.message}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </fieldset>

                            {/* Appointment Details */}
                            <fieldset className="border rounded-3 p-3 p-md-4 mb-4">
                                <legend className="float-none w-auto px-3 text-primary fw-bold">
                                    Appointment Details
                                </legend>

                                <div className="row g-4">

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Appointment Date
                                        </label>
                                        <input
                                            type="date"
                                            className={inputClass("appointmentDate")}
                                            {...register("appointmentDate", validationRules.appointmentDate)}
                                        />
                                        {errors.appointmentDate && (
                                            <div className="invalid-feedback">
                                                {errors.appointmentDate.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Appointment Time
                                        </label>
                                        <input
                                            type="time"
                                            className={inputClass("appointmentTime")}
                                            {...register("appointmentTime", validationRules.appointmentTime)}
                                        />
                                        {errors.appointmentTime && (
                                            <div className="invalid-feedback">
                                                {errors.appointmentTime.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold d-block">
                                            Appointment Type
                                        </label>

                                        <div className="d-flex flex-wrap gap-4 pt-2">
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="New"
                                                    {...register("appointmentType", validationRules.appointmentType)}
                                                />
                                                <label className="form-check-label">
                                                    New Patient
                                                </label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="Follow Up"
                                                    {...register("appointmentType")}
                                                />
                                                <label className="form-check-label">
                                                    Follow Up
                                                </label>
                                            </div>
                                        </div>

                                        {errors.appointmentType && (
                                            <div className="text-danger small mt-2">
                                                {errors.appointmentType.message}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </fieldset>

                            {/* Address Details */}
                            <fieldset className="border rounded-3 p-3 p-md-4 mb-4">
                                <legend className="float-none w-auto px-3 text-primary fw-bold">
                                    Address Details
                                </legend>

                                <div className="row g-4">

                                    <div className="col-12">
                                        <label className="form-label fw-semibold">
                                            Address
                                        </label>
                                        <textarea
                                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                            rows="3"
                                            placeholder="Enter complete address"
                                            {...register("address", validationRules.address)}
                                        />
                                        {errors.address && (
                                            <div className="invalid-feedback">
                                                {errors.address.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-4">
                                        <label className="form-label fw-semibold">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className={inputClass("city")}
                                            placeholder="Enter city"
                                            {...register("city", validationRules.city)}
                                        />
                                        {errors.city && (
                                            <div className="invalid-feedback">
                                                {errors.city.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-4">
                                        <label className="form-label fw-semibold">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            className={inputClass("state")}
                                            placeholder="Enter state"
                                            {...register("state", validationRules.state)}
                                        />
                                        {errors.state && (
                                            <div className="invalid-feedback">
                                                {errors.state.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-4">
                                        <label className="form-label fw-semibold">
                                            Pincode
                                        </label>
                                        <input
                                            type="text"
                                            className={inputClass("pincode")}
                                            placeholder="Enter pincode"
                                            {...register("pincode", validationRules.pincode)}
                                        />
                                        {errors.pincode && (
                                            <div className="invalid-feedback">
                                                {errors.pincode.message}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </fieldset>

                            {/* Insurance Details */}
                            <fieldset className="border rounded-3 p-3 p-md-4 mb-4">
                                <legend className="float-none w-auto px-3 text-primary fw-bold">
                                    Insurance Details
                                </legend>

                                <div className="row g-4">

                                    <div className="col-12">
                                        <label className="form-label fw-semibold d-block">
                                            Insurance
                                        </label>

                                        <div className="d-flex flex-wrap gap-4 pt-2">
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="Yes"
                                                    {...register("insurance", validationRules.insurance)}
                                                />
                                                <label className="form-check-label">
                                                    Yes
                                                </label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    value="No"
                                                    {...register("insurance")}
                                                />
                                                <label className="form-check-label">
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        {errors.insurance && (
                                            <div className="text-danger small mt-2">
                                                {errors.insurance.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Insurance Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter insurance number"
                                            {...register("insuranceNumber")}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Insurance Company
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter insurance company"
                                            {...register("insuranceCompany")}
                                        />
                                    </div>

                                </div>
                            </fieldset>

                            {/* Other Details */}
                            <fieldset className="border rounded-3 p-3 p-md-4 mb-4">
                                <legend className="float-none w-auto px-3 text-primary fw-bold">
                                    Other Details
                                </legend>

                                <div className="row g-4">

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Occupation
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter occupation"
                                            {...register("occupation")}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Marital Status
                                        </label>
                                        <select
                                            className="form-select"
                                            {...register("maritalStatus")}
                                        >
                                            <option value="">Select</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Any Allergy
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Enter allergy details"
                                            {...register("allergy")}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Additional Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Enter additional message"
                                            {...register("message")}
                                        />
                                    </div>

                                </div>
                            </fieldset>

                            {/* Submit */}
                            <div className="text-center pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm"
                                >
                                    Register
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateForm;