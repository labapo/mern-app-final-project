import React, { useEffect, useState } from "react";
import { Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialBar } from "./SocialBar";
import axios from "axios";
import Email from "./Socials/Email";

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
  // console.log(profiles);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const profile = {linkedin: "google.com"}
  console.log("users", users)
  console.log(profiles)
  const findProfileById = (id) => {
    const profile = profiles.find(p => p.user==id)
    return profile;
  }
  return (
    <>
      {users.map((user, i) => {
        const profile = findProfileById(user._id);
        
        return (
        
        <Card key={user._id}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>
              {user.firstName} {user.lastName}
            </Card.Title>
            <Nav.Item>
              <SocialBar user={user} profile={profile}/>
            </Nav.Item>
          </Card.Body>
        </Card>)
      
     })}
    </>
  );
};
