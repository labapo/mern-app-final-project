import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { ProfileCard } from "./ProfileCard";
import "../index.css";


export const Home = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/profiles")
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container className="profileCard">
      <ProfileCard className="littleCard" />
    </Container>
  );
};
