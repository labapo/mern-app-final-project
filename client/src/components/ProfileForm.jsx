import React, { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createProfile } from "../api/index";
import { useNavigate } from "react-router-dom"

export const ProfileForm = ({users}) => {
const [profileData, setProfileData] = useState({
    // user: userData._id,
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
    reddit: "",
    soundCloud: "",
    flickr: "",
    personalWebsite: "",
  });
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile(profileData);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text> Personal Website</InputGroup.Text>
        <Form.Control 
        aria-labelledby="personal"
        name="personalWebsite"
            onChange={(e) => {
              setProfileData({ ...profileData, personalWebsite: e.target.value });
            }}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text> Linkedin</InputGroup.Text>
        <Form.Control 
        aria-labelledby="linkedin"
        name="linkedin"
            onChange={(e) => {
              setProfileData({ ...profileData, linkedin: e.target.value });
            }} 
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text> Facebook</InputGroup.Text>
        <Form.Control 
        aria-labelledby="facebook"
        name="facebook"
            onChange={(e) => {
              setProfileData({ ...profileData, facebook: e.target.value });
            }} 
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text> Instagram</InputGroup.Text>
        <Form.Control 
        aria-labelledby="instagram"
        name="instagram"
            onChange={(e) => {
              setProfileData({ ...profileData, instagram: e.target.value });
            }} 
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text> Twitter</InputGroup.Text>
        <Form.Control 
        aria-labelledby="twitter" 
        name="twitter"
            onChange={(e) => {
              setProfileData({ ...profileData, twitter: e.target.value });
            }}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text> Tiktok</InputGroup.Text>
        <Form.Control 
        aria-labelledby="tiktok" 
        name="tiktok"
            onChange={(e) => {
              setProfileData({ ...profileData, tiktok: e.target.value });
            }}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text> Reddit</InputGroup.Text>
        <Form.Control 
        aria-labelledby="reddit" 
        name="reddit"
            onChange={(e) => {
              setProfileData({ ...profileData, reddit: e.target.value });
            }}
        />
      </InputGroup>
      <Button variant="primary" type="submit" onClick={() => navigate('/home')}>
        Submit
      </Button>
    </Form>
  );
};
