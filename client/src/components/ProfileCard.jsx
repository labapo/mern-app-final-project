import React from "react";
import { Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialBar } from "./SocialBar";



export const ProfileCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Person's Name Here</Card.Title>
          <Nav.Item>
            <SocialBar />
          </Nav.Item>
        </Card.Body>
      </Card>
    </div>
  );
};
