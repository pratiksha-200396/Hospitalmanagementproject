import React from "react";
import { Link } from "react-router-dom";


import neurology from "../assets/neurology.jpg";
import laboratory from "../assets/laboratory.jpg";
import pediatrics from "../assets/pediatrics.jpg";
import physiotherapy from "../assets/physiotherapy.jpg";
import radiology from "../assets/radiology.jpg";
import cardiology from "../assets/cardiology.jpg";
import orthopaedic from "../assets/orthopedics.jpg";
import generalmedicine from "../assets/generalmedicine.jpg";
import emergencycare from "../assets/emergencycare.jpg"


function Service() {

  let services = [
    {
      image: cardiology,
      title: "Cardiology",
      description:
        "Comprehensive heart care with advanced diagnostic tools and treatment options for cardiovascular conditions.",
      feature1: "ECG Testing",
      feature2: "Heart Surgery"
    },
    {
      image: neurology,
      title: "Neurology",
      description:
        "Expert neurological care for brain and nervous system disorders with advanced imaging technology.",
      feature1: "MRI Scans",
      feature2: "Stroke Care"
    },
    {
      image: orthopaedic,
      title: "Orthopedics",
      description:
        "Specialized bone and joint treatment including sports medicine and reconstructive surgery procedures.",
      feature1: "Joint Replacement",
      feature2: "Sports Medicine"
    },
    {
      image: generalmedicine,
      title: "General Medicine",
      description:
        "Complete medical consultation, diagnosis and treatment for common and complex health conditions.",
      feature1: "Health Checkup",
      feature2: "Medical Consultation"
    },
    {
      image: emergencycare,
      title: "Emergency Care",
      description:
        "24/7 emergency medical services with quick diagnosis and immediate treatment for critical conditions.",
      feature1: "24/7 Emergency",
      feature2: "Critical Care"
    },
    {
      image: pediatrics,
      title: "Pediatrics",
      description:
        "Specialized healthcare services for infants, children and teenagers in a safe and caring environment.",
      feature1: "Child Care",
      feature2: "Vaccination"
    },
    {
      image: radiology,
      title: "Radiology",
      description:
        "Advanced diagnostic imaging services to accurately identify and monitor different medical conditions.",
      feature1: "X-Ray",
      feature2: "CT Scan"
    },
    {
      image: laboratory,
      title: "Laboratory",
      description:
        "Reliable laboratory testing services with accurate reports to support diagnosis and treatment.",
      feature1: "Blood Tests",
      feature2: "Health Reports"
    },
    {
      image: physiotherapy,
      title: "Physiotherapy",
      description:
        "Professional physiotherapy and rehabilitation programs to improve mobility, strength and recovery.",
      feature1: "Rehabilitation",
      feature2: "Pain Management"
    }
  ];

  return (
    <div>

      {/* ================= PAGE HEADER ================= */}

      <section className="bg-light py-5">
        <div className="container text-center">

          <h6 className="text-primary fw-bold">
            OUR SERVICES
          </h6>

          <h1 className="fw-bold">
            Healthcare Services
          </h1>

          <p className="text-muted">
            We provide quality healthcare services with experienced
            doctors and modern medical facilities.
          </p>

        </div>
      </section>


      {/* ================= SERVICES ================= */}

      <section className="py-5">

        <div className="container">

          <div className="row g-4">

            {services.map((service, index) => (

              <div className="col-md-6 col-lg-4" key={index}>

                <div className="card border-0 shadow-sm h-100 overflow-hidden">

                  {/* IMAGE */}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                    style={{
                      height: "240px",
                      objectFit: "cover"
                    }}
                  />


                  {/* CONTENT */}

                  <div className="card-body p-4">

                    <h3
                      className="fw-bold mb-3"
                      style={{ color: "#073b78" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-muted"
                      style={{
                        lineHeight: "1.7",
                        minHeight: "90px"
                      }}
                    >
                      {service.description}
                    </p>


                    {/* FEATURES */}

                    <div className="d-flex flex-wrap gap-4 mb-4">

                      <span>
                        <span className="text-primary fw-bold me-2">
                          ✓
                        </span>
                        {service.feature1}
                      </span>

                      <span>
                        <span className="text-primary fw-bold me-2">
                          ✓
                        </span>
                        {service.feature2}
                      </span>

                    </div>


                    {/* BUTTON */}

                    <Link
                      to="/hospitalform"
                      className="btn btn-primary w-100 fw-semibold py-3"
                    >
                      Learn More
                      <span className="float-end fs-5">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Service;