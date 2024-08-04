/* eslint-disable no-unused-vars */
import React from 'react';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Coupons</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">🍕 Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔓 Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔒 Logout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔐 Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔐 Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🛒 Total: $0.00</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};





