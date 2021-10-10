import React from "react";
import ProfilePicture from "../img/profile.jpg";
import "react-bulma-components";
function ProfileComponent() {
  return (
    <div>
      {/* <Image src={ProfilePicture} roundedCircle /> */}
      <figure class="image is-128x128">
        <img class="is-rounded" src={ProfilePicture}/>
      </figure>
    </div>
  );
}

export default ProfileComponent;