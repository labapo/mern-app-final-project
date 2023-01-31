import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { UserForm} from './UserForm'
export const Welcome = () => {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
  }
  return (
    <div>
      <h2>Welcome to the Contact Book!</h2>
      <p>
        This page is meant to keep in touch and to have all our contact info and
        social media stuff together
      </p>
      <Button type="button" variant="primary" onClick={handleClick}>
        Sign Up
      </Button>
      {showComponent && <UserForm />}
      {/* make sure to add code on how to make the sign up button and submit button go away */}
      <Button type="button" variant="primary">
        Sign In
      </Button>
    </div>
  );
};
