import React, { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUser } from "../api/index";
import { ProfileForm } from "./ProfileForm";
// import FileBase from 'react-file-base64'

export const UserForm = ({ currentId, setCurrentId }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profileImage: null,
  });
  const [localUser,setLocalUser]=useState(null)
  const handleSubmit = async (e) => {
    //prevents refreshing the page
    e.preventDefault();
    // await setLocalUser(createUser(userData));
    let result = createUser(userData).then((response)=>{
      setLocalUser(response.data)
      setShowComponent(true)
    })
    
    clear();
  }; console.log(localUser)
    const clear = () => {
      //setCurrentId(null);
      //set data to an empty string
      setUserData({
      firstName: "",
      lastName: "",
      email: "",
      profileImage: null
      })
    }
    const [showComponent, setShowComponent] = useState(false);
  //   const handleClickComponent = () => {
  //   setShowComponent(true);
  // }
  //   const fileSelectorHandler = event => {
  //     console.log(event);
  //     setUserData({...userData, email: event.target.value});
  //   }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>First Name</InputGroup.Text>
          <Form.Control
            aria-labelledby="firstName"
            name="firstName"
            onChange={(e) => {
              setUserData({ ...userData, firstName: e.target.value });
            }}
          />
          {/* <Form.Control.Feedback type="invalid">
          Please enter first name
        </Form.Control.Feedback> */}
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Last Name</InputGroup.Text>
          <Form.Control
            aria-labelledby="lastName"
            name="lastName"
            onChange={(e) => {
              setUserData({ ...userData, lastName: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Email</InputGroup.Text>
          <Form.Control
            type="email"
            aria-labelledby="email"
            placeholder="email@email.com"
            name="email"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Profile Image</InputGroup.Text>
          <Form.Control
            aria-labelledby="profileImage"
            name="profileImage"
            type="file"
            onChange={(e) => {
              setUserData({ ...userData, profileImage: e.target.value });
            }}
            // onDone={({base64}) => setUserData({ ...userData, selectedFile: base64})}
          />
          {/* <FileBase
                name="profileImage"
                type = "file"
                multiple={false}
                onChange={(e) =>{
                    setUserData({...userData, profileImage: e.target.value})}}
                onDone={({base64}) => setUserData({ ...userData, selectedFile: base64})}
                /> */}
        </InputGroup>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        </Form>
        {showComponent && <ProfileForm user={localUser}/>}
      
    </>
  );
};
