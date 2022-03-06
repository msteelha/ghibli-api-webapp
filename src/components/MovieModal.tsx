import { IMovieModalProps } from "../types/types";
import "./MovieModal.css";

/* 
  Lots of help here from https://www.w3schools.com/howto/howto_css_modals.asp 
*/

const MovieModal = ({modalProps} : {modalProps: IMovieModalProps}) => {
    const {cardId, handleClose, isVisible} = modalProps;

    return (
        <div className="movie-modal" style={{ display: isVisible ? "block" : "none" }}>
            <div className="movie-modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <p>{cardId}</p>
            </div>
        </div>
    );
};

export default MovieModal;