import { ICardProps } from "../types/types";
import "./Card.css";

const Card = (props: {cardDetails: ICardProps}) => {
    const {pictureElement,title,content} = props.cardDetails;
    return (
        <div className="card">
            {pictureElement}
            <div className="cardinfo">
                <div className="title">{title}</div>
                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default Card;