import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialBar } from "./SocialBar";
import Avatar from '@mui/material/Avatar'
import Personal from "./Socials/Personal";
import { Typography } from "@mui/material";
import Email from "./Socials/Email";
import Linkedin from "./Socials/Linkedin";
import Facebook from "./Socials/Facebook";
import Instagram from "./Socials/Instagram";
import TikTok from "./Socials/TikTok";
import Reddit from "./Socials/Reddit";

export const SingleProfile = (props) => {
    const [profileData, setProfileData] = useState({
        email: props.profile.email, 
        personalWebsite: props.profile.personalWebsite,
        linkedin: props.profile.linkedin,
        facebook: props.profile.facebook,
        instagram: props.profile.instagram,
        tiktok: props.profile.tiktok,
        reddit: props.profile.reddit,
    })
    const handleInputChange = event => {
        setProfileData({
            ...profileData,
          [event.target.name]: event.target.value
        });
      };
    
  return (
    <div>
      <Card className="expandedProfile">
        <Card.Title>Person's Name Here</Card.Title>
        <Avatar
          className="avatar"
          alt="Placeholder"
          src="https://via.placeholder.com/150"
          sx={{ width: 200, height: 200 }}
        />
        <Card.Body>
                <div className="expanded-profile-body">
                    <label>
                        <Email />:
                        <input
                        type="text"
                        name="name"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        />
                    </label>
                
                </div>
        </Card.Body>
      </Card>
    </div>
  );
};
