import * as React from "react";
import "./profile-image.css";

import { StaticImage } from "gatsby-plugin-image";

const ProfileImage = () => {

  return (
    <div className="profile-image-wrapper">
      <StaticImage  alt="Profile picture"
                    src="../../../images/geun.png"
                    layout="fixed"
                    width={200}
                    height={200} 
                    quality={100}
                    style={{borderRadius: "1.25rem"}}
                  />
    </div>
  );
};

export default ProfileImage