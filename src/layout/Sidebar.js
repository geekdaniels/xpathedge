import React from "react";
import { ProjectConsumer } from "../context";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar   */}
      <ProjectConsumer>
        {(value) => (
          <nav id="sidebar" className={value.showMenu ? "active" : ""}>
            <ul className="list-unstyled components">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li className="">
                <a href="#">Contact Us</a>
              </li>
              <li className="">
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
        )}
      </ProjectConsumer>
    </>
  );
}
