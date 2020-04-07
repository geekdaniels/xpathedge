import React, { Component } from "react";
import { ProjectConsumer } from "../context";
import Logo from "../logo.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <ProjectConsumer>
          {value => (
            <div className="container-fluid dashboard_nav py-0">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">
                  <img src={Logo} alt="Paddysaver logo" width="100px" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => {
                    value.toggleMenu();
                  }}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="nav navbar-nav mr-auto">
                    <li class="nav-item mx-md-4 my-md-0 postion-relative">
                      <a class="nav-link px-0 active" href="#">
                        Home
                      </a>
                    </li>

                    <li class="nav-item mx-md-4 my-md-0 postion-relative">
                      <a class="nav-link px-0" href="#">
                        Contact Us
                      </a>
                    </li>

                    <li class="nav-item mx-md-4 my-md-0 postion-relative">
                      <a class="nav-link px-0" href="#">
                        About Us
                      </a>
                    </li>
                  </ul>

                  <form class="form-inline my-2 my-lg-0">
                    <input
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn my-2 my-sm-0" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          )}
        </ProjectConsumer>
      </>
    );
  }
}
