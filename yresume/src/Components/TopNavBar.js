import React from "react";
import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-components";

function TopNavBar() {
  return (
    <Navbar className="is-black is-fixed-top">
      <Navbar.Container>
        <Navbar.Item href="#">HOME</Navbar.Item>
        <Navbar.Item href="#">ABOUT ME</Navbar.Item>
        <Navbar.Item href="#">SKILLS</Navbar.Item>
        <Navbar.Item href="#">PROJECTS</Navbar.Item>
        <Navbar.Item href="#">AWARDS</Navbar.Item>
        <Navbar.Item href="#">BLOGS</Navbar.Item>
        <Navbar.Item href="#">CONTACT</Navbar.Item>
      </Navbar.Container>
    </Navbar>
  );
}

export default TopNavBar;
