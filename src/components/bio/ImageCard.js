import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ImageCard = () => {

  return (
    <div className="image-card-container">
      <StaticImage className="image-card-avatar"
                    layout="fixed" 
                    formats={["auto", "webp", "avif"]}
                    src="../../images/geun.png"
                    width={150} 
                    height= {200}
                    quality={100}
                    alt="Profile picture"
      />
      {/* <div className="social-icons">
        <a href="https://github.com/geunskoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
          <FaGithub size={25} />
        </a>
        <a href="https://www.instagram.com/geunskoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
          <FaInstagram size={25} />
        </a>
      </div> */}
    </div>
  );
};

export default ImageCard