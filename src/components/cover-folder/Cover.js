import React from "react";
import './Cover.css';
import video from '../../media/videoPag.mp4'


const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={video} autoPlay loop muted />
            <h2>Welcome to my website!!!</h2>
            <h1> Julian Alamada</h1>
            <p>Full Stack Developer | Designer | Content Creator</p>
        </div>
    ) 

};

export default Cover;