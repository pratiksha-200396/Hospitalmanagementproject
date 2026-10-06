
import React from 'react';
import hositalslider from "../assets/hospital2.webp";

function About() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Our Hospital</h1>
        <p className="text-muted">
          Providing quality healthcare with care, compassion and trust.
        </p>
      </div>

      {/* Image + Information */}
      <div className="row align-items-center g-5">

        {/* Left Side Image */}
        <div className="col-md-6">
          <img
            src={hositalslider}
            className="img-fluid rounded-4 shadow"
            alt="Hospital"
          />
        </div>

        {/* Right Side Information */}
        <div className="col-md-6">

          <h2 className="fw-bold text-primary mb-3">
            Welcome to Our Hospital
          </h2>

          <p className="text-muted">
           Dr.Hedgewar rugnalaya, garkheda, Chhatrapati Sambhajinagar (parent hospital). The hospital is 350 bedded with trained team of doctors and nursing personnel. Dr.Hedgewar hospital is a multi-speciality hospital consisting of paediatric unit, cardiac care unit, obstetrical and gynaecological unit, ophthalmic unit, ENT unit, orthopaedic unit, medicine and surgery unit, ICU’s, dialysis unit and many more.
          </p>

          <p className="text-muted">
           The expansion under process for the availability of 800 bed strength hospital in coming two years..
          </p>

          

          {/* Features */}
          <div className="row mt-4">

            <div className="col-6 mb-3">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white rounded-circle p-2 me-3">
                  ✓
                </div>
                <span className="fw-semibold">Experienced Doctors</span>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white rounded-circle p-2 me-3">
                  ✓
                </div>
                <span className="fw-semibold">24/7 Emergency Care</span>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white rounded-circle p-2 me-3">
                  ✓
                </div>
                <span className="fw-semibold">Modern Facilities</span>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white rounded-circle p-2 me-3">
                  ✓
                </div>
                <span className="fw-semibold">Patient Care</span>
              </div>
            </div>

          </div>

          {/* Button */}
          <button className="btn btn-primary px-4 py-2 mt-3 rounded-pill">
            Learn More
          </button>

        </div>
      </div>

    </div>
  );
}

export default About;

