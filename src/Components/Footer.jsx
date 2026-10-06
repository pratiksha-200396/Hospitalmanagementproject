
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">

      <div className="container py-5">
        <div className="row g-4">

          {/* Hospital Info */}
          <div className="col-md-4">
            <h4 className="fw-bold text-primary">
             Dr. Hedgewar Rugnalaya
            </h4>

            <p className="text-light mt-3">
             Near Gajanand Maharaj Mandir, Road, Jawahar Colony, Garkheda, Chhatrapati Sambhajinagar, Maharashtra 431005
            </p>

            <p className="mb-1">
              <strong>Emergency:</strong> +91 98765 43210
            </p>

            <p>
              <strong>Email:</strong> citycare@gmail.com
            </p>
          </div>


          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/patientdetail" className="text-white text-decoration-none">
                  Patients
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          {/* Departments */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Departments</h5>

            <p className="mb-2">Cardiology</p>
            <p className="mb-2">Neurology</p>
            <p className="mb-2">Orthopedic</p>
            <p className="mb-2">Dermatology</p>
            <p className="mb-2">General Medicine</p>
          </div>


          {/* Contact */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <p className="mb-2">
              📍 Chhatrapati Sambhajinagar, Maharashtra
            </p>

            <p className="mb-2">
              📞 +91 98765 43210
            </p>

            <p className="mb-2">
              ✉️ hedgewarrugnalaya@gmail.com
            </p>

            <p>
              🕐 Open 24/7
            </p>
          </div>

        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-top border-secondary">
        <div className="container py-3">

          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                © 2026 City Care Hospital. All Rights Reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <span className="me-3">Facebook</span>
              <span className="me-3">Instagram</span>
              <span>LinkedIn</span>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
