import React, { useState, ChangeEvent } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  section_id: number;
}

interface CardModalProps {
  card: Card;
  onSave: (card: Card) => void;
  onClose: () => void;
 
}

const CardModal: React.FC<CardModalProps> = ({ card, onSave, onClose }) => {
  const [editedCard, setEditedCard] = useState({ ...card });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedCard({ ...editedCard, title: event.target.value });
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditedCard({ ...editedCard, description: event.target.value });
  };


  const handleSave = () => {
    onSave(editedCard);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Card</h2>
        <input type="text" value={editedCard.title} onChange={handleTitleChange} />
        <textarea value={editedCard.description} onChange={handleDescriptionChange} />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CardModal;
