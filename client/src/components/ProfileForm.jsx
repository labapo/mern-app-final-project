import React, {useState} from 'react';
import { Button, InputGroup, Form} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { createProfile } from '../api/index';
export const ProfileForm = () => {
    const [profileData, setProfileData] = useState({
    linkedin: "", 
    facebook: "",
    instagram: "",
    twitter: "",
    reddit: "",
    soundCloud: "",
    flickr: "",
    personalWebsite: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        createProfile(profileData);
    }
    return (
      <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
          <InputGroup.Text> Linkedin
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
  
          <InputGroup className="mb-3">
          <InputGroup.Text> Facebook
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
  
          <InputGroup className="mb-3">
          <InputGroup.Text> Instagram
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
  
          <InputGroup className="mb-3">
          <InputGroup.Text> Twitter
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
  
          <InputGroup className="mb-3">
          <InputGroup.Text> Tiktok
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
  
          <InputGroup className="mb-3">
          <InputGroup.Text> Reddit
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
  
          <InputGroup className="mb-3">
          <InputGroup.Text> SoundCloud
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
  
          <InputGroup className="mb-3">
          <InputGroup.Text> Flickr
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
  
          <InputGroup className="mb-3">
          <InputGroup.Text> Personal Website
          </InputGroup.Text>
          <Form.Control aria-labelledby="firstName"/>
          </InputGroup>
          <Button variant="primary" type="submit" >
            Submit
        </Button>
      </Form>
    )
  }
  