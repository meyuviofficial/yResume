import React from "react";
import ProfilePicture from "../img/profile.jpg";
import "semantic-ui-css/semantic.min.css";
import { Card, Image } from 'semantic-ui-react'
// function ProfileComponent() {
//   return <Image src={ProfilePicture} size="medium" circular />;
// }



const ProfileComponent = () => (
  <Card>
    <Image src={ProfilePicture} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Yuvaraj Selvarajan</Card.Header>
      <Card.Meta>
        <span className='date'>2019-PRESENT</span>
      </Card.Meta>
      <Card.Description>
        <b>SOFTWARE ENGINEER</b> AT SHELL
      </Card.Description>
    </Card.Content>
  </Card>
)

export default ProfileComponent;
