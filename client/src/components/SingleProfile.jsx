import React, { useState } from "react";
import { Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialBar } from "./SocialBar";

export const SingleProfile = () => {
  return (
    <div>
      <Card >
        <Card.Img variant="top"  /> 
        <Card.Body>
          <Card.Title>Person's Name Here</Card.Title>
          <Nav.Item>
          </Nav.Item>
        </Card.Body>
      </Card>
    </div>
  );
};
