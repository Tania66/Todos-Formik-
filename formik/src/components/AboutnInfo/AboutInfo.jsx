import React from "react";
import pictures from "../../assets/about.png"
const AboutInfo = () => {
    const pic = pictures
  return (
    <div className="about_container">
<div className="about_info_inner">
            <h2 className="about_title">We will help you improve your skills</h2>
      <p className="about_text">
        The model offers a framework for discussing problems related to the
        user's experience, as well as possible ways and means of solving them.
        Application development begins at the top level (strategy), where the
        future software product is described quite abstractly from the point of
        view of the expectations of both users and the customer.
      </p>  
   </div>
       <img src={pic} alt="computer" className="img_about"/>
    </div>
  );
};

export default AboutInfo;
