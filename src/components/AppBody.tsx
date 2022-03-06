import { useState } from 'react';
import { IMovieModalProps } from '../types/types';
import '../App.css';
import MovieCardList from './MovieCardList';
import MovieModal from './MovieModal';

function AppBody() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalCard, setModalCard] = useState("");

    const handleCardClick = (e:React.MouseEvent) => {
        console.log(e.currentTarget);
        setModalCard(e.currentTarget.id);
        setIsModalVisible(true);
    }

    const handleCloseModal = () => {
        setIsModalVisible(false);
    }

    let modalInfo: IMovieModalProps = {
        cardId: modalCard,
        handleClose: handleCloseModal,
        isVisible: isModalVisible,
    }

  return (
    <div className="app-body">
        <MovieCardList cardClick={ handleCardClick } />
        <MovieModal modalProps={modalInfo} />
    </div>
  );
}

export default AppBody;
