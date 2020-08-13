import React from "react";



function Card(props) {
    console.log(props);
    return(
        <>
        <div className="cards">
        <div className="w3-green w3-hover-shadow w3-padding-64 w3-center">
            <div className="profile">
                <img src={props.user_img} alt="user image" className="user_img" />
                <div className="text-part">
                    <span class="details">{props.details}</span>
                    <h3 className="title">{props.title}</h3>
                    <a href={props.link} target="_blank">
                    
                        <button className="btn"><span className="btn-text">Profile</span></button>
                
                    </a>
                </div>
            </div>
            
        </div>
        </div>
                
        </>
    );
}

export default Card;