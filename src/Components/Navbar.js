import React from "react";
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';


export default function Navbar(props) {

  let blueCount=0;

  const blueTheme=()=>{
    blueCount+=1;
    if(blueCount%2!==0){
      document.body.style.backgroundColor='#133366';
    }
    else{
      document.body.style.backgroundColor='black';
    }
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/aboutus">
                  About Us
                </NavLink>
              </li>
              
            </ul>
            
          </div>
          <button type="button" className="btn btn-primary mx-2" disabled={props.mode==='light'} onClick={blueTheme} style={{height:'18px',width:'8px',borderRadius:'50%'}}></button>
           blue theme
            <div className="form-check form-switch mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toogle}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  DarkMode
                </label>
              </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propType = {
  title: PropTypes.string,
};

Navbar.deafultProps = {
  title: "default",
};
