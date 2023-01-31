import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { ProfileForm } from "./ProfileForm";
import { UserForm} from './UserForm'

export const Welcome = () => {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
  }
  const [hideButton, setHideButton] = useState(true)
  const hiddenButton = () => {
    setShowComponent(false)
  }
  return (
    <div>
      <h2>Start of Welcome Page</h2>
      <p>
        This page is meant to keep in touch and to have all our contact info and
        social media stuff together
      </p>
      <Button type="button" variant="primary" onClick={handleClick}>
        Sign Up
      </Button>
      {showComponent && <UserForm />}
      {/* make sure to add code on how to make the sign up button and submit button go away */}
      <Button type="button" variant="primary" onClick={hiddenButton}>
        Sign In
      </Button>
    {/* //this is where the profile form will be after the user form is submitted.  */}
    <h1>End of welcome page</h1>
    </div>
  );
};
