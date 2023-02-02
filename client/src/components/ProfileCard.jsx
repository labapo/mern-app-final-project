import React, { useEffect, useState } from "react";
import { Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialBar } from "./SocialBar";
import axios from "axios";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteProfile } from "../api/index";

export const ProfileCard = (id, updated, setUpdated) => {
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
  console.log("users", users);
  // console.log(profiles);
  const findProfileById = (id) => {
    const profile = profiles.find((p) => p.user === id);
    return profile;
  }; 
  // const deleteProfile = async () => {
  //   await axios
  //   .delete(`http://localhost:8000/profiles/${id}`)
  //   .then((res) => setUpdated(!updated))
  //   .catch((err) => console.log(err));
  // }
  // console.log(users)
  // console.log(profiles)
  return (
    <>
      {users.map((user, i) => {
        const profile = findProfileById(user._id);

        return (
          <Card key={user._id}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <a
                href={`/profiles/${profile._id}`}
              >
                <Card.Title>
                  {user.firstName} {user.lastName}
                </Card.Title>
              </a>
              <Nav.Item>
                <SocialBar user={user} profile={profile} />
              </Nav.Item>
              <Button
                size="small"
                color="primary"
                onClick={() => deleteProfile(profile._id)}
              >
                <DeleteIcon fontSize="small" />
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
