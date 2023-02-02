import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "@mui/material/Avatar";
import Personal from "./Socials/Personal";
import { Typography } from "@mui/material";
import Email from "./Socials/Email";
import Linkedin from "./Socials/Linkedin";
import Facebook from "./Socials/Facebook";
import Instagram from "./Socials/Instagram";
import TikTok from "./Socials/TikTok";
import Reddit from "./Socials/Reddit";
import { useParams } from "react-router-dom";

export const SingleProfile = () => {
  let { id } = useParams();
 //create function to find one user and pass that through
  return (
    <div>
      <Card className="expandedProfile">
        <Card.Title>name placehodler</Card.Title>
        <Avatar
          className="avatar"
          alt="Placeholder"
          src="https://via.placeholder.com/150"
          sx={{ width: 200, height: 200 }}
        />
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm">
            Edit Profile
          </Button>
          <Button variant="secondary" size="sm">
            Edit User
          </Button>
          <Button variant="danger" size="sm">
            Delete User
          </Button>
        </div>
        <Card.Body>
          <div className="expanded-profile-body">
            <Email />{" "}
            <Typography variant="body1">www.personalsite.com</Typography>
            <Personal />{" "}
            <Typography variant="body1">www.personalsite.com</Typography>
            <Linkedin />{" "}
            <Typography variant="body1">www.personalsite.com</Typography>
            <Facebook />{" "}
            <Typography variant="body1">www.personalsite.com</Typography>
            <Instagram />{" "}
            <Typography variant="body1">www.personalsite.com</Typography>
            <TikTok />{" "}
            <Typography variant="body1">www.personalsite.com</Typography>
            <Reddit />{" "}
            <Typography variant="body1">www.personalsite.com</Typography>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
