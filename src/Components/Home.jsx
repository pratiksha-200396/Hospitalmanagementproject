
import React from 'react'
import { Link } from 'react-router-dom'
import hospitallimg from "../assets/Screenshot 2026-09-23 122650.png";
import hositalslider from "../assets/hospital2.webp";
import hositalslider1 from "../assets/hospital.webp";
import hositalslider2 from "../assets/hospital1.webp";
import ShrikantSir from "../assets/Screenshot 2026-10-06 223631.png";
import pujarisir from "../assets/Screenshot 2026-10-06 224500.png";
import maheshsir from "../assets/Screenshot 2026-10-06 225008.png";
import thosarsir from "../assets/thosarsir.jpg";

function Home() {
  return (
    <div>

      {/* ================= SLIDER ================= */}

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src={hositalslider}
              className="d-block w-100"
              alt="Hospital"
             height={350}
            />
          </div>

          <div className="carousel-item">
            <img
              src={hositalslider1}
              className="d-block w-100"
              alt="Hospital"
              height={350}
            />
          </div>

          <div className="carousel-item">
            <img
              src={hositalslider2}
              className="d-block w-100"
              alt="Hospital"
              height={350}
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= QUICK FEATURES ================= */}
{/* 
      <section className="py-5 bg-light">
        <div className="container">

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm text-center h-100 p-4 rounded-4">
                <div className="display-5 mb-3">🚑</div>
                <h5 className="fw-bold">24/7 Emergency</h5>
                <p className="text-muted mb-0">
                  Emergency healthcare support available anytime.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm text-center h-100 p-4 rounded-4">
                <div className="display-5 mb-3">👨‍⚕️</div>
                <h5 className="fw-bold">Expert Doctors</h5>
                <p className="text-muted mb-0">
                  Experienced doctors and medical professionals.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm text-center h-100 p-4 rounded-4">
                <div className="display-5 mb-3">🏥</div>
                <h5 className="fw-bold">Modern Facilities</h5>
                <p className="text-muted mb-0">
                  Modern healthcare facilities for patient care.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm text-center h-100 p-4 rounded-4">
                <div className="display-5 mb-3">❤️</div>
                <h5 className="fw-bold">Patient Care</h5>
                <p className="text-muted mb-0">
                  Comfortable and caring environment for patients.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section> */}


      {/* ================= ABOUT HOSPITAL ================= */}

      <section className="py-5">
        <div className="container">

          <div className="row align-items-center g-5">

            {/* Image */}
       <div className="col-md-6">
  <img
    src={hospitallimg}
    className="img-fluid rounded-4 shadow"
    alt="Hospital"
    style={{ height: "400px", width: "90%", objectFit: "cover" }}
  />
</div>

            {/* Information */}
            <div className="col-md-6">

              <h6 className="text-primary fw-bold">
                ABOUT OUR HOSPITAL
              </h6>

              <h2 className="fw-bold mb-3">
                Quality Healthcare With Compassion
              </h2>

              <p className="text-muted">
                Our hospital provides healthcare services in a safe,
                comfortable and caring environment.
              </p>

              <p className="text-muted">
                Our doctors and healthcare professionals work together
                to provide proper care and support to patients.
              </p>

              <div className="row mt-4">

                <div className="col-6 mb-3">
                  <h4 className="text-primary fw-bold">50+</h4>
                  <p className="text-muted mb-0">Doctors</p>
                </div>

                <div className="col-6 mb-3">
                  <h4 className="text-primary fw-bold">30+</h4>
                  <p className="text-muted mb-0">Departments</p>
                </div>

                <div className="col-6">
                  <h4 className="text-primary fw-bold">24/7</h4>
                  <p className="text-muted mb-0">Emergency</p>
                </div>

                <div className="col-6">
                  <h4 className="text-primary fw-bold">10K+</h4>
                  <p className="text-muted mb-0">Patients</p>
                </div>

              </div>

              <Link
                to="/about"
                className="btn btn-primary rounded-pill px-4 mt-3"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}




      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h6 className="text-primary fw-bold">
              WHY CHOOSE US
            </h6>

            <h2 className="fw-bold">
              Why Patients Trust Us
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "70px", height: "70px" }}
                >
                  <span className="fs-3">✓</span>
                </div>

                <h5 className="fw-bold mt-3">
                  Experienced Team
                </h5>

                <p className="text-muted">
                  Skilled doctors and trained medical staff.
                </p>
              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="text-center">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "70px", height: "70px" }}
                >
                  <span className="fs-3">⏰</span>
                </div>

                <h5 className="fw-bold mt-3">
                  24/7 Support
                </h5>

                <p className="text-muted">
                  Medical assistance available throughout the day.
                </p>

              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="text-center">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "70px", height: "70px" }}
                >
                  <span className="fs-3">🏥</span>
                </div>

                <h5 className="fw-bold mt-3">
                  Modern Equipment
                </h5>

                <p className="text-muted">
                  Modern facilities for healthcare services.
                </p>

              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="text-center">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "70px", height: "70px" }}
                >
                  <span className="fs-3">💙</span>
                </div>

                <h5 className="fw-bold mt-3">
                  Patient First
                </h5>

                <p className="text-muted">
                  Patient comfort and care are our priorities.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= DOCTORS ================= */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h6 className="text-primary fw-bold">
              OUR DOCTORS
            </h6>

            <h2 className="fw-bold">
              Meet Our Specialists
            </h2>

            <p className="text-muted">
              Experienced doctors available for consultation.
            </p>

          </div>


          <div className="row g-4">

            {/* Doctor 1 */}
            <div className="col-md-6 col-lg-3">

              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">

                <img
                  src={ShrikantSir}
                  className="card-img-top"
                  alt="Doctor"
                  style={{
                    height: "260px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body text-center">

                  <h5 className="fw-bold">
                   Dr. Shreekant Dahibhate
                  </h5>

                  <p className="text-primary mb-2">
                   Spine Surgeon
                  </p>

                  <p className="text-muted small">
                     Spine and Endoscopic Surgery 
                  </p>

                </div>

              </div>

            </div>


            {/* Doctor 2 */}
            <div className="col-md-6 col-lg-3">

              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">

                <img
                  src={pujarisir}
                  className="card-img-top"
                  alt="Doctor"
                  style={{
                    height: "260px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body text-center">

                  <h5 className="fw-bold">
                  Dr Pinakin Pujari
                  </h5>

                  <p className="text-primary mb-2">
                    Paediatric and Neonatal Surgeon
                  </p>

                  <p className="text-muted small">
                 Dr Pinakin are paediatric, neonatal, laparoscopic and endoscopic surgeries.
                  </p>

                </div>

              </div>

            </div>


            {/* Doctor 3 */}
            <div className="col-md-6 col-lg-3">

              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">

                <img
                  src={thosarsir}
                  className="card-img-top"
                  alt="Doctor"
                  style={{
                    height: "260px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body text-center">

                  <h5 className="fw-bold">
                
Dr. Siddheshwar Thosar
                  </h5>

                  <p className="text-primary mb-2">
                    Orthopedic
                  </p>

                  <p className="text-muted small">
                    Specialist in bones and joint treatment.
                  </p>

                </div>

              </div>

            </div>


            {/* Doctor 4 */}
            <div className="col-md-6 col-lg-3">

              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">

                <img
                  src={maheshsir}
                  className="card-img-top"
                  alt="Doctor"
                  style={{
                    height: "260px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body text-center">

                  <h5 className="fw-bold">
                   Dr. Mahesh Ramesh Deshpande
                  </h5>

                  <p className="text-primary mb-2">
                   Medical Director & Chief Interventional Cardiologist
                  </p>

                  <p className="text-muted small">
                    Dr Mahesh Deshpande is a Cardiologist associated 
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= APPOINTMENT CTA ================= */}

      <section className="py-5">

        <div className="container">

          <div className="bg-primary text-white rounded-4 shadow p-4 p-md-5">

            <div className="row align-items-center">

              <div className="col-md-8">

                <h2 className="fw-bold">
                  Need Medical Assistance?
                </h2>

                <p className="mb-0">
                  Book your appointment with our hospital today.
                </p>

              </div>

              <div className="col-md-4 text-md-end mt-4 mt-md-0">

                <Link
                  to="/hospitalform"
                  className="btn btn-light text-primary fw-semibold rounded-pill px-4"
                >
                  Book Appointment
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT INFO ================= */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h6 className="text-primary fw-bold">
              CONTACT US
            </h6>

            <h2 className="fw-bold">
              We Are Here For You
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-md-6 col-lg-3">

              <div className="card border-0 shadow-sm text-center p-4 h-100 rounded-4">

                <div className="fs-2 mb-3">
                  📍
                </div>

                <h5 className="fw-bold">
                  Address
                </h5>

                <p className="text-muted mb-0">
                  Pune, Maharashtra
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="card border-0 shadow-sm text-center p-4 h-100 rounded-4">

                <div className="fs-2 mb-3">
                  📞
                </div>

                <h5 className="fw-bold">
                  Phone
                </h5>

                <p className="text-muted mb-0">
                  +91 98765 43210
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="card border-0 shadow-sm text-center p-4 h-100 rounded-4">

                <div className="fs-2 mb-3">
                  ✉️
                </div>

                <h5 className="fw-bold">
                  Email
                </h5>

                <p className="text-muted mb-0">
                  citycare@gmail.com
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="card border-0 shadow-sm text-center p-4 h-100 rounded-4">

                <div className="fs-2 mb-3">
                  ⏰
                </div>

                <h5 className="fw-bold">
                  Working Hours
                </h5>

                <p className="text-muted mb-0">
                  Open 24/7
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home

