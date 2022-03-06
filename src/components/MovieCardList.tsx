import { MouseEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { ICardProps, IMovie } from "../types/types";
import CardList from "./CardList";
import MovieVisual from "./MovieVisual";


const MovieCardList = ({cardClick}:{cardClick: (e:MouseEvent)=>void}) => {
    const [data, setData] = useState<IMovie[]>([]);
  
    useEffect(() => {
        axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then((result) => setData(result.data))
        .catch((e) => {
        console.error("recieved error:");
        console.error(e);
        setData([]);
        });
    }, []);

    if (!data.length) {
        return (<>"Loading..."</>);
    }

    const movieCardData: ICardProps[] = data.map(movie => ({
        id: movie.id, 
        title: movie.title, 
        content: movie.description, 
        pictureElement: <MovieVisual id={movie.id} original_title={movie.original_title} original_title_romanised={movie.original_title_romanised} />,
        isClicked: false,
    }));

    return (<CardList cards={movieCardData} title="Movies" handleClick={cardClick} />);
};

export default MovieCardList;