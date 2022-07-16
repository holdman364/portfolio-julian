import React from "react";
import './About.css';
import perfil from '../../media/perfil.jpg'


const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3> Let me toll you something about me.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis voluptas est reiciendis sunt sed sint cupiditate nemo amet officia incidunt numquam laudantium minus distinctio placeat, maiores alias. Consequuntur, suscipit.
            </p>
        </div>
        <div className="about-img">
            <img className="about-img" src={perfil} alt="fotito"/>
        </div>
    </div>
  )
}

export default About;