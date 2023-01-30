import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import { ProfileCard } from "./ProfileCard";

export const Home = (setCurrentId) => {
  const [totalProfile, setTotalProfile] = useState();
  const [profile, setProfileData] = useState();
  console.log(profile)
  if (totalProfile === 0) {
     return ""
  }
  return (
    <Container>
      {profile?.map((profile) => (
        <div key={profile._id}>
          <ProfileCard {...setCurrentId} post={ProfileCard}/>
        </div>
      ))}
    </Container>
  )
}
