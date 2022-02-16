import { ICardProps } from "../types/types";
import Card from "./Card";

const CardList = (props: {cards: ICardProps[], title: string}) => {
    return (
        <>
            <h1>{props.title}</h1>
            <div className="cardlist">
                {props.cards.map((c: ICardProps) => <Card key={c.id} cardDetails={c} />)}
            </div>
        </>
    );
};

export default CardList;