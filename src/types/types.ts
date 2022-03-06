export interface ICardProps {
    id: string;
    pictureElement: JSX.Element;
    title: string;
    content: string;
}

export interface IMovieModalProps {
    handleClose: () => void;
    cardId: string;
    isVisible: boolean;
}

export interface IMovie {
    id: string;
    title: string;
    original_title: string;
    original_title_romanised: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    running_time: string;
    rt_score: string;
    people: string[];
    species: string[];
    locations: string[];
    vehicles: string[];
    url: string;
}