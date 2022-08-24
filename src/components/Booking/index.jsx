import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/slices/booking';
import BookingEditModal from '../BookingEditModal';
import { Container } from './styles';

const Booking = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(remove(data.id));
  };

  const handleUpdate = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <div
        className="image"
        style={{ backgroundImage: `url(${data.property.image})` }}
        alt={data.property.title}
      />
      <div className="content">
        <h3>{data.name}</h3>
        <p>Initial: {data.initialDate}</p>
        <p>Final: {data.finalDate}</p>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
      {showModal && (
        <BookingEditModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          booking={data}
        />
      )}
    </Container>
  );
};

export default Booking;
