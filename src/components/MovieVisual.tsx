import "./MovieVisual.css";

const MovieVisual = (props: {id: string, original_title: string, original_title_romanised: string}) => {

    return (
        <div id={props.id} data-testid="movie_visual" className="movie_visual">
            <div className="movie_title_jap">{props.original_title}</div>
            <div className="movie_title_rom">{props.original_title_romanised}</div>
        </div>
    );
};

export default MovieVisual;