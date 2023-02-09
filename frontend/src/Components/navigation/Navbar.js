/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
  return (
    <section class="fixed-top">
        <nav class="navbar navbar-expand-xl navbar-light bg-light">
            <div class="container container-md container-lg container-fluid">
                <a class="navbar-brand text-success" href="/">BloodBank</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse show" id="navbarBasic">

                    <form class="d-flex mt-3 mt-lg-0 ms-lg-auto">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button type="button" class="d-lg-none btn btn-secondary"><i class="fa-solid fa-magnifying-glass"></i></button>
                        
                    </form>

                    <ul class="navbar-nav ms-auto mt-3 mt-lg-0 mb-2 mb-xl-0">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Client</a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                              <li><a class="dropdown-item text-white" href="/login">Login</a></li>
                              <li><hr class="dropdown-divider bg-secondary"/></li>
                              <li><a class="dropdown-item text-white" href="/register">Register</a></li>
                            </ul>
                          </li>


                        <li class="nav-item">
                            <a class="nav-link" href="/doners">Doners</a>
                        </li>
                        
                        
                    </ul>

                    
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar
