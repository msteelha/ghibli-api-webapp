import { ICardProps } from "../types/types";
import "./Card.css";

const Card = ({ cardDetails }: { cardDetails: ICardProps }) => {
    const {pictureElement,title,content, id} = cardDetails;
    return (
        <div id={id} className="card">
            {pictureElement}
            <div className="card-info">
                <div className="title">{title}</div>
                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default Card;