import React from "react";
import { ICardProps } from "../types/types";
import "./Card.css";

const ButtonCard = ({ cardDetails, handleClick }: { cardDetails: ICardProps, handleClick: (e:React.MouseEvent)=>void }) => {
    const {id, pictureElement,title,content} = cardDetails;

    return (
        <div id={id} className="card" onClick={handleClick} >
            {pictureElement}
            <div className="card-info">
                <div className="title">{title}</div>
                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default ButtonCard;