import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { ProfileCard } from "./ProfileCard";

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
    <Container>
      {profiles.map((profiles, i) => {
        return (
          <div key={i}>
            <a href={`/profiles/${profiles.id}`}>{profiles.linkedin}</a>
          </div>
        );
      })}
      <ProfileCard />
    </Container>
  );
};
