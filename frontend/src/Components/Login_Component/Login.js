import React from 'react';
import './loginStyle.css';

function Register() {
  return (
    <section className="background-radial-gradient overflow-hidden">
  
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
          <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
            BloodBank <br />
            <span style={{color: "hsl(218, 81%, 75%)"}}>for your </span>
          </h1>
          <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
            ab ipsum nisi dolorem modi. Quos?
          </p>
        </div>
  
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
  
          <div className="card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
            <form action="#">
                <div className="row">
  
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" className="form-control" />
                </div>
  
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control" />
                </div>

                <input type="submit" className="btn btn-primary btn-block mb-4" value="Login"/>
                  
                <div className="text-center">
                  <p>or <a href="/register">Register</a></p>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register
