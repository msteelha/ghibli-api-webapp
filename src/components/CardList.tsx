import React from "react";
import { ICardProps } from "../types/types";
import ClickableCard from "./ClickableCard";

const CardList = ({ cards, title,handleClick }: { cards: ICardProps[], title: string, handleClick: (e:React.MouseEvent)=>void }) => {
    
    return (
        <>
            <h1>{title}</h1>
            <div className="card-list">
                {cards.map(c => <ClickableCard key={c.id} cardDetails={c} handleClick={handleClick} />)}
            </div>
        </>
    );
};

export default CardList;