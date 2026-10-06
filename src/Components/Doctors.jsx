import React from "react";
import { Link } from "react-router-dom";

import ShrikantSir from "../assets/Screenshot 2026-10-06 223631.png";
import pujarisir from "../assets/pujarisir.webp";
import thosarsir from "../assets/thosarsir.jpg";
import maheshsir from "../assets/maheshsir.jpg";

function Doctors() {

  let doctors = [
  {
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    name: "Dr. Aarav Sharma",
    specialist: "Cardiologist",
    description:
      "Experienced cardiologist specializing in heart care, diagnosis and advanced cardiac treatment.",
    experience: "15+ Years Experience",
    department: "Cardiology"
  },

  {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    name: "Dr. Ananya Patel",
    specialist: "Paediatrician",
    description:
      "Dedicated paediatrician providing comprehensive healthcare and medical care for children.",
    experience: "12+ Years Experience",
    department: "Paediatrics"
  },

  {
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    name: "Dr. Rohan Mehta",
    specialist: "Orthopedic Surgeon",
    description:
      "Specialist in bone, joint and muscle disorders with advanced orthopedic treatment.",
    experience: "18+ Years Experience",
    department: "Orthopedics"
  },

  {
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
    name: "Dr. Priya Deshmukh",
    specialist: "Neurologist",
    description:
      "Experienced neurologist providing diagnosis and treatment for brain and nervous system disorders.",
    experience: "14+ Years Experience",
    department: "Neurology"
  },

  {
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    name: "Dr. Vikram Joshi",
    specialist: "General Physician",
    description:
      "Providing complete medical consultation, preventive care and treatment for various conditions.",
    experience: "16+ Years Experience",
    department: "General Medicine"
  },

  {
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
    name: "Dr. Neha Kulkarni",
    specialist: "Gynecologist",
    description:
      "Specialized healthcare for women's health, pregnancy care and gynecological conditions.",
    experience: "13+ Years Experience",
    department: "Gynecology"
  },

  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    name: "Dr. Aditya Rao",
    specialist: "Radiologist",
    description:
      "Expert in diagnostic imaging and radiology services for accurate medical diagnosis.",
    experience: "11+ Years Experience",
    department: "Radiology"
  },

  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    name: "Dr. Sneha Patil",
    specialist: "Dermatologist",
    description:
      "Providing professional treatment for skin, hair and other dermatological conditions.",
    experience: "10+ Years Experience",
    department: "Dermatology"
  }
];
  return (
    <div>

      {/* ================= PAGE HEADER ================= */}

      <section className="bg-light py-5">

        <div className="container text-center">

          <h6 className="text-primary fw-bold">
            OUR DOCTORS
          </h6>

          <h1 className="fw-bold">
            Meet Our Specialists
          </h1>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Our experienced team of doctors is dedicated to providing
            high-quality healthcare with compassion and advanced medical care.
          </p>

        </div>

      </section>


      {/* ================= DOCTORS ================= */}

      <section className="py-5">

        <div className="container">

          <div className="row g-4">

            {doctors.map((doctor, index) => (

              <div
                className="col-md-6 col-lg-3"
                key={index}
              >

                <div
                  className="card border-0 shadow-sm h-100 text-center rounded-4 p-4"
                >

                  {/* Doctor Image */}

                  <div className="mb-4">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="rounded-circle shadow-sm"
                      style={{
                        width: "210px",
                        height: "210px",
                        objectFit: "cover"
                      }}
                    />

                  </div>


                  {/* Doctor Name */}

                  <h4
                    className="fw-bold mb-2"
                    style={{ color: "#073b78" }}
                  >
                    {doctor.name}
                  </h4>


                  {/* Specialization */}

                  <h6 className="text-primary fw-bold mb-3">
                    {doctor.specialist}
                  </h6>


                  {/* Description */}

                  <p
                    className="text-muted"
                    style={{
                      lineHeight: "1.6",
                      minHeight: "100px"
                    }}
                  >
                    {doctor.description}
                  </p>


                  {/* Experience */}

                  <div className="text-muted mb-3">

                    <div className="mb-2">

                      <span className="text-primary me-2">
                        ♙
                      </span>

                      {doctor.experience}

                    </div>


                    {/* Department */}

                    <div>

                      <span className="text-primary me-2">
                        ▦
                      </span>

                      {doctor.department}

                    </div>

                  </div>


                  {/* Button */}

                  <Link
                    to="/hospitalform"
                    className="btn btn-primary rounded-pill w-100 py-2 fw-semibold mt-auto"
                  >
                    Book Appointment
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-5 bg-light">

        <div className="container">

          <div
            className="bg-primary text-white rounded-4 shadow p-4 p-md-5"
          >

            <div className="row align-items-center">

              <div className="col-md-8">

                <h2 className="fw-bold">
                  Need to Consult a Doctor?
                </h2>

                <p className="mb-0">
                  Book an appointment with our experienced specialists today.
                </p>

              </div>


              <div className="col-md-4 text-md-end mt-4 mt-md-0">

                <Link
                  to="/hospitalform"
                  className="btn btn-light text-primary rounded-pill px-4 py-2 fw-semibold"
                >
                  Book Appointment
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Doctors;