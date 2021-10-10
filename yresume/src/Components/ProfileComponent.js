import React from "react";
import ProfilePicture from "../img/profile.jpg";
import { Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function ProfileComponent() {
  return <Image src={ProfilePicture} size="medium" circular />;
}

export default ProfileComponent;
