import React, { useEffect, useState } from "react";
import { Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialBar } from "./SocialBar";
import axios from "axios";

export const ProfileCard = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/profiles")
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
console.log(profiles)

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(users)
  return (
  
    <div>
      {users.map((user) => 
        <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{user.firstName}</Card.Title>
          <Nav.Item>
            <SocialBar />
          </Nav.Item>
        </Card.Body>
      </Card>
      )}
      
    </div>
  );
};
