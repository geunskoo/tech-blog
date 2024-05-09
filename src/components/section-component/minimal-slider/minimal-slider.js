import * as React from "react"; 
import { useEffect, useRef } from "react";
import "./minimal-slider.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MinimalSlider = ({images}) => {

  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 300, height: 300)
          }
          base
        }
      }
    }
  }
`);
  
const imageSrc = images.map(name => {
  const image = data.allFile.edges.find(edge => edge.node.base.includes(name))
  return image.node.childImageSharp.gatsbyImageData
})


  const sliderRef = useRef(null);  // Create a ref for the slider
  useEffect(() => {
    const slider = sliderRef.current;  // Access the current slider via ref
    let isTransitioning = false;

    const interval = setInterval(() => {
      if (!isTransitioning && slider) {
        isTransitioning = true;
        slider.style.transform = 'translateX(-300px)';
      }
    }, 3000); // Every 3 seconds

    const handleTransitionEnd = () => {
      // Move the first slide to the end
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
        isTransitioning = false;
      });
    };

    if (slider) {
      slider.addEventListener('transitionend', handleTransitionEnd);
    }

    // Cleanup the interval and event listener when the component unmounts
    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          <div className="slide"><GatsbyImage image={getImage(imageSrc[0])} alt="Image 1" width={300} height={300} style={{borderRadius: "0.8rem"}}/></div>
          <div className="slide"><GatsbyImage image={getImage(imageSrc[1])} alt="Image 2" width={300} height={300} style={{borderRadius: "0.8rem"}}/></div>
          <div className="slide"><GatsbyImage image={getImage(imageSrc[2])} alt="Image 3" width={300} height={300} style={{borderRadius: "0.8rem"}}/></div>
          <div className="slide"><GatsbyImage image={getImage(imageSrc[3])} alt="Image 4" width={300} height={300} style={{borderRadius: "0.8rem"}}/></div>
        </div>
      </div>
    </div>
  );
}

export default MinimalSlider;
