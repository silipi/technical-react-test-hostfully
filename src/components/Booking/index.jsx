import { useState } from 'react';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/slices/booking';
import BookingEditModal from './BookingEditModal';
import { Container } from './styles';
import Button from '../Button';

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
        <div>
          <p>Start: {format(new Date(data.initialDate), 'MM/dd/yyyy')}</p>
          <p>End: {format(new Date(data.finalDate), 'MM/dd/yyyy')}</p>
        </div>
      </div>

      <div className="actions">
        <Button className="update" type="button" onClick={handleUpdate}>
          Update
        </Button>
        <Button className="delete" type="button" onClick={handleDelete}>
          Delete
        </Button>
      </div>

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
