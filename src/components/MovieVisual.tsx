import "./MovieVisual.css";

const MovieVisual = ({ id, original_title, original_title_romanised }: { id: string, original_title: string, original_title_romanised: string }) => {

    return (
        <div id={id} data-testid="movie_visual" className="movie-visual">
            <div className="movie-title-jap">{original_title}</div>
            <div className="movie-title-rom">{original_title_romanised}</div>
        </div>
    );
};

export default MovieVisual;